import { Participant } from "../participant/participant";

export interface Booking {
    id?: number,
    userId: number,
    purposeId: number,
    roomId: number,
    date: Date,
    hourIn: Date,
    hourOut: Date,
    participants: Participant[],
}
