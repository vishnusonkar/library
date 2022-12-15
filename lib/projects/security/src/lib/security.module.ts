// import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SecurityComponent } from './security.component';

// import { HttpModule } from '@angular/http';



// import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [SecurityComponent, LoginComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [SecurityComponent, LoginComponent],
})
export class SecurityModule {}
