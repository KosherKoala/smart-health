import { Procedure } from "./procedure";
import { Patient } from "./patient";
import { Calendar } from "./calendar";
import { Insurance } from "./insurance";


export class Doctor {
    
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    procedures: [Procedure];
    patientList: [Patient];
    practiceName: String;
    calendar: [Calendar];
    specialty: String;
    acceptedInsurance: [Insurance];
    location: {
                addressOne: String,
                addressTwo: String,
                city: String,
                state: String,
                zip: Number
            };

    picture: String
}
