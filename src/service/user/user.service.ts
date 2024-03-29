import { DocumentDefinition, FilterQuery } from 'mongoose';
import { UserInterface } from '../../contracts/user.interface';
import { UserModel } from '../../models/user/user.model';
import { omit } from 'lodash';

export async function createUser(input: DocumentDefinition<Omit<UserInterface, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
    try{
        const user = await UserModel.create(input)
        return omit(user.toJSON(), ['password'])
    }catch(e: any){
        throw new Error(e)
    }
}

export async function validatePassword({email, password}:{email: string, password: string}) {
    const user = await UserModel.findOne({email})

    if(!user) return false
    
    const isValid = await user.comparePassword(password)

    if(!isValid) return false

    return omit(user.toJSON(), ['password'])
}

export async function findUser(query: FilterQuery<UserInterface>) {
    return UserModel.findOne(query).lean()
}