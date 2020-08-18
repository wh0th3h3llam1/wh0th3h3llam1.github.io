import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{
		path : 'about',
		component : AboutComponent
	},
	{
		path : '',
		component : HomeComponent
	},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }

export const routingComponents = [
	HomeComponent,
	AboutComponent,
]