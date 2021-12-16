import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AllocationComponent } from './allocation/allocation.component';
import { EditDetailsFormComponent } from './edit-details-form/edit-details-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchTrainerComponent } from './search-trainer/search-trainer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrainerDashboardComponent } from './trainer-nav/trainer-dashboard.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "profile", component: TrainerprofileComponent },
  { path: "editprofile", component: EditDetailsFormComponent },
  {path:"admin",component:AdmindashComponent},
  {path:"admin/allocate",component:AllocationComponent},
  {path:"admin/searchtrainer",component:SearchTrainerComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
