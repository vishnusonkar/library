import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from "../app/component/account/account.component";
import { AllmoduleComponent } from './allmodule/allmodule.component';
import { HrmsComponent } from './hrms/hrms.component';
import { IndexmoduleComponent } from './indexmodule/indexmodule.component';
import { NgModule } from '@angular/core';
import {PropertyComponent} from '../app/component/property/property.component';
import { PublicpageComponent } from './publicpage/publicpage.component';
import{SecurityComponent} from 'security'
import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'login', component: SecurityComponent },
  { path: 'index', component: AllmoduleComponent },
  { path: 'publi/index', component: PublicpageComponent },
  { path: 'accounts/index', component: AccountComponent },
  { path: 'hrms/index', component: HrmsComponent },
  { path: 'md/index', component: SolutionComponent },
  { path: 'property/index', component: PropertyComponent },
  { path: 'solution-admin/index', component: IndexmoduleComponent },
  { path: '**', component: AllmoduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
