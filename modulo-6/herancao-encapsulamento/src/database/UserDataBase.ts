import { User } from "../models/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    private userTable = "Labe_Users"

    public getAllUsers = async () => {
        try {
            const returnAllUsers = await UserDataBase.connection
                .select('*')
                .from(this.userTable)

            return returnAllUsers
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public insertUser = async (newUser: User): Promise<void> => {
        try {
            await UserDataBase.connection(this.userTable).insert(newUser)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getUserById = async (userId: string) => {
        try {
            const returnUserById = await UserDataBase.connection
                .select('*')
                .from(this.userTable)
                .where('id', userId)

            return returnUserById

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}