import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/user"
import { UserInputDTO } from './../model/userDTO';
import { generationId } from './../services/idGeneration';
import { CustomError } from './../error/CustomError';
import { InvalidPassword } from "../error/UserError";

export class UserBusiness {
  public create = async (input: UserInputDTO) => {

    try {
      const userDatabase = new UserDatabase()
      const { name, email, password } = input

      if (
        !email ||
        !name ||
        !password
      ) {
        throw new CustomError(400, 'Preencha os campos "email", "name" e "password"')
      }

      if (password.length <= 6) {
        throw new InvalidPassword()
      }

      const id: string = generationId()
      const user: User = {
        id,
        name,
        email,
        password
      }
      await userDatabase.create(user)

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  getAllUsers = async (): Promise<User[]> => {
    return await new UserDatabase().getAllUsers();
  }
}
