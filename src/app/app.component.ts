import { Component, OnInit } from '@angular/core';
import { GlobalSettingService } from './global-setting.service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	
	constructor(private globalSettings : GlobalSettingService,
				private router : Router){}

	ngOnInit(): void {
		this.router.events.subscribe(event => {
			if(event instanceof NavigationStart){
				if(event.url == "/auth")
					this.isAuth = true;
				else
					this.isAuth = false;
			}
		});
	}


	isAuth = true;
}
