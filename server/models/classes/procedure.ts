import { Patient } from './patient';
import { Doctor } from './doctor';

export class Procedure {
    doctor: Doctor;
    name: String;
    cost: Number;
    description: String;
    duration: Number;
}
