import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import{NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogGetComponent } from './blog-get/blog-get.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'create',
		component: BlogAddComponent
	  },
	  {
		path: 'edit/:id',
		component: BlogEditComponent
	  },
	  {
		path: 'blogs',
		component: BlogGetComponent
	  }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }