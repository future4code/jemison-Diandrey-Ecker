import { MovieDatabase } from './../data/MovieDatabase';

export class MovieBusiness {
    public createMovie = async (input: any) => {

        try {
            const movieDatabase = new MovieDatabase()
            const { title, description, duration_in_minutes, year_of_release } = input

            if (
                !title ||
                !description ||
                !duration_in_minutes ||
                !year_of_release
            ) {
                throw new Error("Preencha todos os campos");
            }

            const id: string = Date.now().toString()

            await movieDatabase.insertMovie({
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release,
            })
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getAllMovies = async () => {

        try {
            const movieDatabase = new MovieDatabase()

            return await movieDatabase.getAllMovies();

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
