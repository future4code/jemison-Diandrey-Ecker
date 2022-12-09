import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {

    public getAllUsers = async () => {
        const result = await UserDatabase.connection("Labe_Users").select()
        return result
    }

    public getUserById = async (id: string) => {
        const result = await UserDatabase.connection("Labe_Users").select().where({ id })
        return result
    }

    public createUser = async (id: string, email: string, password: string) => {
        const result = await UserDatabase.connection("Labe_Users").insert({ id, email, password })
    }
}
