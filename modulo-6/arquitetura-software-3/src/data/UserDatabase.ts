import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from './../error/CustomError';

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  public create = async (user: User) => {

    try {
      UserDatabase.connection.initialize()

      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into(UserDatabase.TABLE_NAME);

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    } finally {
      console.log("Conexão Encerrada");
      UserDatabase.connection.destroy()
    }
  }

  getAllUsers = async (): Promise<User[]> => {
    try {

      const result = await UserDatabase.connection.select("*").from("LABEFLIX_USER");

      return result

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
