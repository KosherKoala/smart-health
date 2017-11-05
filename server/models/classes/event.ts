import { Patient } from './patient';
import { Doctor } from './doctor';
import { Procedure } from './procedure';

export class Event {
    description: string;
    date: string;
    patient: Patient;
    doctor: Doctor;
    timeIn: string;
    timeOut: String;
    isPending: Boolean;
    procedure: Procedure;
}
