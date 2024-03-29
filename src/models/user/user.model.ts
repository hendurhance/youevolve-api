import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config';
import { UserInterface } from '../../contracts/user.interface';
import { UserSchema } from '../../schema/user.schema';


UserSchema.pre('save', async function (next) {
    let user = this as UserInterface;

    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))

        const hash = await bcrypt.hashSync(user.password, salt)
        user.password = hash

        return next()

    } else {
        next()
    }

})

UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    const user = this as UserInterface;

    return bcrypt.compare(candidatePassword, user.password).catch(e => false)
}

export const UserModel = mongoose.model<UserInterface>('User', UserSchema)

