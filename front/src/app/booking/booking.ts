import { Participant } from "../participant/participant";
<<<<<<< HEAD
import { Purpose } from "../purpose/purpose";
=======
>>>>>>> dev-shiift
import { Room } from "../room/room";

export interface Booking {
    id?: number,
    userId: number,
    purposeId: number,
    roomId: number,
    dateIn: Date,
    dateOut: Date,
    participants: Participant[],
<<<<<<< HEAD
    purpose?:Purpose
    room?:Room
=======
    room?: Room
>>>>>>> dev-shiift
}
