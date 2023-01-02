import mongoose from 'mongoose'
import { CategoryInterface } from '../../contracts/category.interface';
import { CategorySchema } from '../../schema/category.schema';


export const CategoryModel = mongoose.model<CategoryInterface>('Category', CategorySchema)

