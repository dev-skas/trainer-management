import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocationComponent } from './allocation/allocation.component';
import { EditDetailsFormComponent } from './edit-details-form/edit-details-form.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';





const routes: Routes = [{path:'trainerprofile',component:TrainerprofileComponent},
{path:'trainer-dashboard', component:TrainerDashboardComponent},
{path:'login',component:LoginComponent},
{path:'signUp',component:SignUpComponent},
{path:'allocation',component:AllocationComponent},
{path:'edittrainer',component:EditDetailsFormComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
