import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { CreateblogComponent } from './createblog/createblog.component';

export const AppRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{path:'blog1',component:Blog1Component},
	{path:'blog2',component:Blog2Component},
	{path:'blog3',component:Blog3Component},
	{path:'createblog',component:CreateblogComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);