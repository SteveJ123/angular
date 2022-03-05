import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { LoginComponent } from './login/login.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { StudentfeesdetailsComponent } from './studentfeesdetails/studentfeesdetails.component';

const routes: Routes = [
{path:'', redirectTo:'login',pathMatch:'full'},
{path:'login', component:LoginComponent},
// authgaurd gaurds these paths
{path:'studentdash', component:StudentdashComponent, canActivate:[AuthguardService]},
// authgaurd gaurds these paths
{path:'studentfeesdetails/:id', component:StudentfeesdetailsComponent, canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
