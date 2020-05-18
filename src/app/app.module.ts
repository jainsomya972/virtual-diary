import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { UIShellModule, GridModule, InputModule, ContentSwitcherModule, ButtonModule, TableModule, NotificationModule, ModalModule, PlaceholderModule, DatePickerModule, OverflowMenuDirective, OverflowMenu, OverflowMenuOption, DialogModule, PaginationModule } from 'carbon-components-angular';

import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { Add20Module } from '@carbon/icons-angular/lib/add/20';
import { Delete16Module } from '@carbon/icons-angular/lib/delete/16';
import { Settings16Module } from '@carbon/icons-angular/lib/settings/16';

// import { FaceDissatisfied80Module } from '@carbon/pictograms/lib/face--dissatisfied';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TodayComponent } from './today/today.component';
import { ArchivesComponent, EntryModal } from './archives/archives.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LoginComponent,
		TodayComponent,
		ArchivesComponent,
		BookmarksComponent,
		EntryModal,
		// OverflowMenuDirective,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		InputModule,
		ButtonModule,

		//carbon icons
		Notification20Module,
		UserAvatar20Module,
		AppSwitcher20Module,
		Add20Module,
		Delete16Module,
		Settings16Module,

		//carbon modules
		GridModule,
		ContentSwitcherModule,
		TableModule,
		NotificationModule,
		ModalModule,
		PlaceholderModule,
		DatePickerModule,
		DialogModule,
		PaginationModule
	],
	entryComponents: [
		EntryModal
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
