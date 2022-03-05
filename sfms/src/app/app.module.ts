import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { LoginComponent } from './login/login.component';
import { StudentfeesdetailsComponent } from './studentfeesdetails/studentfeesdetails.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentdashComponent,
    LoginComponent,
    StudentfeesdetailsComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
