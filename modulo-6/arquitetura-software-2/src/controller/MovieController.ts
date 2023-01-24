import { Request, Response } from 'express';
import { MovieBusiness } from './../business/MovieBusiness';

export class MovieController {
    public createMovie = async (req: Request, res: Response) => {

        try {
            const input = {
                title: req.body.title,
                description: req.body.description,
                duration_in_minutes: req.body.duration_in_minutes,
                year_of_release: req.body.year_of_release
            }

            const movieBusiness = new MovieBusiness()
            await movieBusiness.createMovie(input)

            res.status(201).send({ message: "Filme criado!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getAllMovies = async (req: Request, res: Response): Promise<void> => {

        try {
            const movieBusiness = new MovieBusiness()
            const result = await movieBusiness.getAllMovies()

            res.send(result).status(200)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}