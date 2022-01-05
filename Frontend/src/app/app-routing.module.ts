import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AllocationComponent } from './allocation/allocation.component';
import { EditDetailsFormComponent } from './edit-details-form/edit-details-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchTrainerComponent } from './search-trainer/search-trainer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { AuthGuard } from './auth.guard';
import { TrainerAuthGuard } from './trainer-auth.guard';
import { AllocationDetailsPageComponent } from './allocation-details-page/allocation-details-page.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "profile",canActivate:[TrainerAuthGuard], component: TrainerprofileComponent },
  { path:"profile/allocateDetail",canActivate:[TrainerAuthGuard], component:AllocationDetailsPageComponent},
  { path: "editprofile",canActivate:[TrainerAuthGuard], component: EditDetailsFormComponent },
  {path:"admin",canActivate:[AuthGuard],component:AdmindashComponent},
  {path:"admin/allocate",canActivate:[AuthGuard],component:AllocationComponent},
  {path:"admin/searchtrainer",canActivate:[AuthGuard],component:SearchTrainerComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
