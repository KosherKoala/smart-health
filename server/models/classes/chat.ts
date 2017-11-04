import { Doctor } from "./doctor";
import { Patient } from "./patient";
import mongoose = require('mongoose');
import Schema = mongoose.Schema;
import Types = mongoose.Types;
import ObjectId = Types.ObjectId;

export class Chat {
    event: [Event];
    doctor: Doctor;
    sender:  ObjectId;
    date: Date;
    message: String;

}
