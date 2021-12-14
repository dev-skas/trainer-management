import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { SearchTrainerComponent } from './search-trainer/search-trainer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrainerprofileComponent,
    TrainerDashboardComponent,
    SearchTrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
