import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import { ProductModel } from '../../models/product/product.model';
import { ProductInterface } from '../../contracts/product.interface';



export async function createProduct(input: DocumentDefinition<Omit<ProductInterface, 'createdAt' | 'updatedAt'>>) {
    return ProductModel.create(input)
}
