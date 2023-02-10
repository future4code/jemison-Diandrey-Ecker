import { BaseDatabase } from "./BaseDatabase";
import { Movie } from '../model/movie';
import { UserDatabase } from './UserDatabase';
import { CustomError } from "../error/CustomError";

export class MovieDatabase extends BaseDatabase {

    private static movieTable = "LABEFLIX_MOVIE"

    public insertMovie = async (movie: Movie) => {

        try {
            MovieDatabase.connection.initialize()

            await MovieDatabase.connection
                .insert({
                    id: movie.id,
                    title: movie.title,
                    description: movie.description,
                    duration_in_minutes: movie.duration_in_minutes,
                    year_of_release: movie.year_of_release
                }).into(MovieDatabase.movieTable)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } finally {
            console.log("Conexão Encerrada");
            MovieDatabase.connection.destroy()
        }
    }

    public getAllMovies = async () => {

        try {
            MovieDatabase.connection.initialize()
            const allMovies = await UserDatabase.connection.select().from("LABEFLIX_MOVIE");

            return allMovies;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}