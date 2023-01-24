import { UserDatabase } from './../data/userDatabase';
import { user } from "../types/user";

export class UserBusiness {

    createUser = async (input: any): Promise<void> => {

        try {

            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error("Please fill all the fields");
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Invalid Email");
            }

            if (password.length < 6) {
                throw new Error("Password must have at least 6 characters");
            }

            const id: string = Date.now().toString()

            const userDatabase = new UserDatabase()
            await userDatabase.createUser({
                id,
                email,
                name,
                password
            });
        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    getAllUsers = async (): Promise<user[]> => {
        return await new UserDatabase().getAllUsers();
    }

    deleteUser = async (input: { id: string }) => {
        if (!input.id) {
            throw new Error("Insira um ID");
        }
        return await new UserDatabase().deleteUser(input.id)
    }
}

