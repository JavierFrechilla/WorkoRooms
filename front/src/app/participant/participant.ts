import { Guid } from "guid-typescript";

export interface Participant {
    id: number,
    userId: number,
    bookingId: Guid
}
