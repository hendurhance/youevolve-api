import {DocumentDefinition} from 'mongoose'
import { UserInterface } from '../../contracts/user.interface';
import { UserModel } from '../../models/user/user.model';

export async function createUser(input: DocumentDefinition<UserInterface>) {
    try{
        return await UserModel.create(input)
    }catch(e: any){
        throw new Error(e)
    }
}