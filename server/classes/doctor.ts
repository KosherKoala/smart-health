export class Doctor{
    firstName: String;
    lastName: String;
    specialty: String;
    location: {
                line_1: String,
                line_2: String,
                city: String,
                zip: String,
                state: String,
            };
    procedures: [Object];
}
