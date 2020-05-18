import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NotificationService } from 'carbon-components-angular';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  entry: Entry = new Entry();

  constructor(private dataSerive: DataService,
              private router: Router,
              private notificationService: NotificationService) { }

  ngOnInit() {
    if(!this.dataSerive.isUserLogged())
      this.router.navigate(['/auth']);
    this.entry = this.dataSerive.getTodaysEntry();
  }

  emotionChanged(event){
    this.entry.emotion = event.name;
  }

  saveEntry(){
    this.dataSerive.saveEntry(this.entry);
    this.notificationService.showNotification({
      type: 'success',
      title: 'Entry saved!',
      target: '.notification-target',
    });
    console.log(this.dataSerive.getAllUserEntries());
  }
}
