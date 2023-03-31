import { BaseDataBase } from './BaseDataBase';
import { Product } from '../models/Product';

export class ProductDataBase extends BaseDataBase {

    private productTable = "Labe_Products"

    public getAllProducts = async () => {
        try {
            const result = await ProductDataBase.connection(this.productTable).select('*')
            return result

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public createProduct = async (newProduct: Product): Promise<void> => {
        try {
            await ProductDataBase.connection(this.productTable).insert(newProduct)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getProductById = async (productId: string) => {
        try {
            const resultProductById = await ProductDataBase.connection
                .select('*')
                .from(this.productTable)
                .where('id', productId)

            return resultProductById

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getProductPrice = async (productId: string) => {
        try {
            const resultProductPrice = await ProductDataBase.connection
                .select('price')
                .from(this.productTable)
                .where('id', productId)

            return resultProductPrice

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}