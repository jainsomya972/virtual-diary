import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodayComponent } from './today/today.component';
import { ArchivesComponent } from './archives/archives.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
	{
		path: '',
		// loadChildren: () => import('./starter-home/starter-home.module').then(m => m.StarterHomeModule)
		redirectTo: 'auth',
		pathMatch: 'full'
	},
	{path: 'auth', component: LoginComponent},
	{path: 'today', component: TodayComponent},
	{path: 'archives', component: ArchivesComponent},
	{path: 'bookmarks', component: BookmarksComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
