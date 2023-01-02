import mongoose from 'mongoose'
import { ProductSchema } from '../../schema/product.schema';
import { ProductInterface } from '../../contracts/product.interface';


export const ProductModel = mongoose.model<ProductInterface>('Product', ProductSchema)

