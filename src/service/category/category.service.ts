import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import { CategoryInterface } from '../../contracts/category.interface';
import { CategoryModel } from '../../models/category/category.model';


export async function createCategory(input: DocumentDefinition<Omit<CategoryInterface, 'createdAt' | 'updatedAt'>>) {
    return CategoryModel.create(input)
}

export async function findCategory(
    query: FilterQuery<CategoryInterface>, options: QueryOptions = { lean: true}
) {
    return CategoryModel.findOne(query, {}, options)
}

export async function findAndUpdateCategory(query: FilterQuery<CategoryInterface>, update: UpdateQuery<CategoryInterface>, options: QueryOptions) {
    return CategoryModel.findOneAndUpdate(query, update, options)
}

export async function deleteCategory(query: FilterQuery<CategoryInterface>, ) {
    return CategoryModel.deleteOne(query)
}