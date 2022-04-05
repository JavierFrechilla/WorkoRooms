import { Participant } from "../participant/participant";
import { Purpose } from "../purpose/purpose";
import { Room } from "../room/room";

export interface Booking {
    id?: number,
    userId: number,
    purposeId: number,
    roomId: number,
    dateIn: Date,
    dateOut: Date,
    participants: Participant[],
    purpose?:Purpose
    room?:Room
}
