import { Health } from "./health";
import { Insurance } from "./insurance";
import { History } from "./history";

export class Patient {
    firstName: String;
    lastName: String;
    health: Health;
    insurance: Insurance;
    history: [History];
    picture: String;
    isValidated: Boolean;
}
