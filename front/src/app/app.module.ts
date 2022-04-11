import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http'
import { FullCalendarModule } from 'primeng/fullcalendar'
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EditComponent } from './edit/edit.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'login', component: LoginComponent },
  {path:'register',component: RegisterComponent},
  {path:'main',component: MainComponent},
  {path:'profile',component: ProfileComponent},
  {path: 'booking', component:BookingComponent},
  {path: 'edit', component: EditComponent},
  {path: '**', component: NotfoundComponent},
]

@NgModule({
  declarations: [	
    AppComponent,
    BookingComponent,
    IntroComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    ProfileComponent,
    NotfoundComponent,
    HeaderComponent,
    MapComponent, 
    EditComponent 
   ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FullCalendarModule,
    RouterModule.forRoot(routes),
    MbscModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }