import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Chat } from "./chat";
import { Event } from "./event";

export class Health {
    doctor: Doctor;
    patient: Patient;
    appointments: [Event];
    chat: [Chat];
}
