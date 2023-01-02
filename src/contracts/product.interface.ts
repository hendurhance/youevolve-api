import mongoose from "mongoose"
import { UserInterface } from "./user.interface";
import { CategoryInterface } from './category.interface';

export interface ProductInterface extends mongoose.Document {
    user: UserInterface['_id']
    category: CategoryInterface['_id']
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date,
    updatedAt: Date
}
