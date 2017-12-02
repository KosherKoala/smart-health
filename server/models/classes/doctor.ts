import { Procedure } from "./procedure";
import { Patient } from "./patient";
import { Calendar } from "./calendar";
import { Insurance } from "./insurance";
import { History } from "./history";

export class Doctor {
    
    firstName: String;
    lastName: String;
    procedures: [Procedure];
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
    History: [History];

    picture: String
}
