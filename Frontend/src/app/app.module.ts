import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainHomeComponent } from './main-home-nav/main-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { EditDetailsFormComponent } from './edit-details-form/edit-details-form.component';

import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
// import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { TrainerDashboardComponent } from './trainer-nav/trainer-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminnavComponent } from './adminnav/adminnav.component';

import { AuthService } from './auth.service';
import { SearchTrainerComponent } from './search-trainer/search-trainer.component';
import { AllocationComponent } from './allocation/allocation.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { ViewallocationComponent } from './viewallocation/viewallocation.component';
import { AllocationDetailsPageComponent } from './allocation-details-page/allocation-details-page.component';




@NgModule({
  declarations: [
    AppComponent,

    MainHomeComponent,
    SignUpComponent,
    LoginComponent,
    EditDetailsFormComponent,

    TrainerprofileComponent,
    TrainerDashboardComponent,
    SearchTrainerComponent,
    AllocationComponent,
    HomeComponent,
    AdminnavComponent,
    AdmindashComponent,
    FooterComponent,
    ViewallocationComponent,
    AllocationDetailsPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    FormsModule,
    HttpClientModule,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
