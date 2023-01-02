import mongoose from "mongoose"
import { UserInterface } from "./user.interface";

export interface SessionInterface extends mongoose.Document {
    user: UserInterface['_id']
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}
