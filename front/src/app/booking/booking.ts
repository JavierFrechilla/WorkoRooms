import { Participant } from "../participant/participant";
import { Room } from "../room/room";

export interface Booking {
    id?: number,
    userId: number,
    purposeId: number,
    roomId: number,
    dateIn: Date,
    dateOut: Date,
    participants: Participant[],
    room?: Room
}
