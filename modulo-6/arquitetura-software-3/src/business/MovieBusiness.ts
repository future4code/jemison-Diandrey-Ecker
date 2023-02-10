import { MovieDatabase } from './../data/MovieDatabase';
import { MovieInputDTO } from './../model/movieDTO';
import { CustomError } from './../error/CustomError';
import { generationId } from './../services/idGeneration';
import { Movie } from '../model/movie';

export class MovieBusiness {
    public createMovie = async (input: MovieInputDTO) => {

        try {
            const movieDatabase = new MovieDatabase()
            const { title, description, duration_in_minutes, year_of_release } = input

            if (
                !title ||
                !description ||
                !duration_in_minutes ||
                !year_of_release
            ) {
                throw new CustomError(400, "Preencha todos os campos");
            }

            const id: string = generationId()

            const movie: Movie = {
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release,
            }
            await movieDatabase.insertMovie(movie)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
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
