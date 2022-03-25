import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    UserComponent,
    PurposeComponent,
    ParticipantComponent,
    BookingComponent,
    DtobookingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
