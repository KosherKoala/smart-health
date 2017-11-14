import { Patient } from './patient';
import { Doctor } from './doctor';
import { Procedure } from './procedure';

export class Appointment {
    description: string;
    date: string;
    patient: Patient;
    doctor: Doctor;
    timeIn: string;
    timeOut: String;
    isPending: Boolean;
    isCompleted: Boolean;
    isActive: Boolean;
    procedure: Procedure;
}
