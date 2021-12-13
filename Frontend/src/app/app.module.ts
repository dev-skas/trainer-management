import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { AllocationComponent } from './allocation/allocation.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainerprofileComponent,
    TrainerDashboardComponent,
    AllocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
