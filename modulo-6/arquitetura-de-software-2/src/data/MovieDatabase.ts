import { BaseDatabase } from "./BaseDatabase";
import { Movie } from './../types/Movie';
import { UserDatabase } from './UserDatabase';


export class MovieDatabase extends BaseDatabase {

    private static movieTable = "LABEFLIX_MOVIE"

    public insertMovie = async (movie: Movie) => {

        try {
            MovieDatabase.connection.initialize()
            await MovieDatabase.connection.insert({
                id: movie.id,
                title: movie.title,
                description: movie.description,
                duration_in_minutes: movie.duration_in_minutes,
                year_of_release: movie.year_of_release
            }).into(MovieDatabase.movieTable)
        }catch (error: any) {
            throw new Error("error.message");
        }
    }

    public getAllMovies = async () => {

        try {
            MovieDatabase.connection.initialize()
            const allMovies = await UserDatabase.connection.select().from("LABEFLIX_MOVIE");

            return allMovies;
        }catch (error: any) {
            throw new Error(error.message);
        }
    }
}