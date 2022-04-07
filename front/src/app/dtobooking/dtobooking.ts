import { Booking } from "../booking/booking";
import { Participant } from "../participant/participant";

export interface Dtobooking {
    booking: Booking,
    participants: Participant[]
}
