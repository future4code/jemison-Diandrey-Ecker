
import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    createUser = async (user: user): Promise<void> => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password
            }).into("User_Arq")
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    getAllUsers = async (): Promise<user[]> => {
        try {

            const result = await UserDatabase.connection.select("*").from("User_Arq");

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    deleteUser = async (id: string): Promise<void> => {

        try {

            await UserDatabase.connection()
                .where({ id })
                .from("User_Arq")
                .delete()

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}