import { AccountComponent } from './component/account/account.component';
import { AllmoduleComponent } from './allmodule/allmodule.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IndexmoduleComponent } from './indexmodule/indexmodule.component';
import { NgModule } from '@angular/core';
import { PropertyComponent } from './component/property/property.component';
import { SecurityModule } from 'security';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { HrmsComponent } from './hrms/hrms.component';
import { SolutionComponent } from './solution/solution.component';

@NgModule({
  declarations: [AppComponent, AllmoduleComponent, IndexmoduleComponent, AccountComponent, PropertyComponent, PublicpageComponent, HrmsComponent, SolutionComponent],
  imports: [BrowserModule, AppRoutingModule, SecurityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
