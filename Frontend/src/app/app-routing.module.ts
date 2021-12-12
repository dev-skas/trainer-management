import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';

const routes: Routes = [{path:'trainerprofile',component:TrainerprofileComponent},
{path:'trainer-dashboard', component:TrainerDashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
