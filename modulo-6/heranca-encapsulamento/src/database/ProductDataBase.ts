import { BaseDatabase } from "./BaseDatabase";

export class ProductDataBase extends BaseDatabase {

    public createNewProduct = async(id: string, name: string, price: number) => {
        const result = await ProductDataBase.connection('Labe_Products').insert({id, name, price})
        return result
    }

    public getAllProducts = async() => {
        const result = await ProductDataBase.connection('Labe_Products').select()
        return result
    }
}