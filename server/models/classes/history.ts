import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Chat } from "./chat";
import { Appointment } from "./appointment";

export class History {
    doctor: Doctor;
    patient: Patient;
    appointments: [Appointment];
    chat: [Chat];
}
