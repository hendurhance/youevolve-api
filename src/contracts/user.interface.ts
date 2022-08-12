import mongoose from "mongoose"

export interface UserInterface extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
