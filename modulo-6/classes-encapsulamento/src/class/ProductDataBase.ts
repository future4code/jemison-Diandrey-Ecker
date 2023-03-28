import { Knex } from 'knex';
import { Products } from './Products';

export class ProductDataBase {

    constructor(private connection: Knex) {
        this.connection = connection
    }

    public insertProduct = async (newProduct: Products) => {
        await this.connection("Labe_Products").insert(newProduct);
    }

    public getProducts = async () => {
        const result = await this.connection("Labe_Products").select()
        return result
    }
}