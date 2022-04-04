import { Participant } from "../participant/participant";

export interface Booking {
    id?: number,
    userId: number,
    purposeId: number,
    roomId: number,
    dateIn: Date,
    dateOut: Date,
    participants: Participant[],
}
