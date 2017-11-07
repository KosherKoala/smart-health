import { Health } from "./health";
import { Insurance } from "./insurance";

export class Patient {
    firstName: string;
    lastName: string;
    health: Health;
    insurance: Insurance;
    history: [History];
    picture: String;
    isValidated: Boolean;
}
