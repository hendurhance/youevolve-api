import mongoose from "mongoose"
import { UserInterface } from "./user.interface";

export interface CategoryInterface extends mongoose.Document {
    user: UserInterface['_id']
    title: string;
    createdAt: Date;
    updatedAt: Date;
}
