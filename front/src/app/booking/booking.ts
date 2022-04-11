import { Guid } from "guid-typescript";
import { Purpose } from "../purpose/purpose";
import { Room } from "../room/room";

export interface Booking {
    id?: Guid,
    userId: number,
    purposeId: number,
    roomId: number,
    dateIn: Date,
    dateOut: Date,
    purpose?:Purpose
    room?:Room,
    participants?: string,
    array?: string[]
}