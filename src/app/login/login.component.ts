import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TextInput } from 'carbon-components-angular'
import { GlobalSettingService } from '../global-setting.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  penName = {value: undefined, invalid: false};
  password = {value: undefined, invalid: false};

  constructor(private dataService: DataService, 
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.dataService.isUserExists(this.penName.value)){
      if(this.dataService.userLogin(this.penName.value,this.password.value))
        this.router.navigate(['/today']);
      else
        this.password.invalid = true;
    }
    else{
      this.dataService.createUser(this.penName.value, this.password.value);
      this.router.navigate(['/today']);
    }
  }

}
