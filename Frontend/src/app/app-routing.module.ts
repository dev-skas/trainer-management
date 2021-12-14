import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTrainerComponent } from './search-trainer/search-trainer.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';

const routes: Routes = [{path:'trainerprofile',component:TrainerprofileComponent},
{path:'trainer-dashboard', component:TrainerDashboardComponent},
{
  path:'searchtrainer',component:SearchTrainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
