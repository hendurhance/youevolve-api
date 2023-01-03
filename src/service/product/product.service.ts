import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import { ProductModel } from '../../models/product/product.model';
import { ProductInterface } from '../../contracts/product.interface';



export async function createProduct(input: DocumentDefinition<Omit<ProductInterface, 'createdAt' | 'updatedAt'>>) {
    return ProductModel.create(input)
}

export async function findProduct(
    query: FilterQuery<ProductInterface>, options: QueryOptions = { lean: true}
) {
    return ProductModel.findOne(query, {}, options)
}

export async function findProductsByCategory(
   categoryId: string
) {
    return ProductModel.find({category: categoryId})
}

export async function getProducts() {
    return ProductModel.find().lean()
}

export async function findAndUpdateProduct(query: FilterQuery<ProductInterface>, update: UpdateQuery<ProductInterface>, options: QueryOptions) {
    return ProductModel.findOneAndUpdate(query, update, options)
}

export async function deleteProduct(query: FilterQuery<ProductInterface>, ) {
    return ProductModel.deleteOne(query)
}