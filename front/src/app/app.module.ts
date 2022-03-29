import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';
import { PurposeComponent } from './purpose/purpose.component';
import { ParticipantComponent } from './participant/participant.component';
import { BookingComponent } from './booking/booking.component';
import { DtobookingComponent } from './dtobooking/dtobooking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { IntroComponent } from './intro/intro.component';
import { WatermarkComponent } from './watermark/watermark.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: '', component: IntroComponent},
  // {path: '**', component: NotfoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    UserComponent,
    PurposeComponent,
    ParticipantComponent,
    BookingComponent,
    DtobookingComponent,
    IntroComponent,
    WatermarkComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
