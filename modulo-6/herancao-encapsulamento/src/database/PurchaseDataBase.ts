import { Purchase } from '../models/Purchase';
import { BaseDataBase } from './BaseDataBase';

export class PurchaseDataBase extends BaseDataBase {

    private purchaseTable = "Labe_Purchases"

    public insertPurchase = async (newPurchase: Purchase): Promise<void> => {
        try {
            await PurchaseDataBase.connection(this.purchaseTable).insert(newPurchase)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getUserPurchases = async (userId: string) => {

        try {
            const purchaseById = await PurchaseDataBase.connection
                .select('*')
                .from((this.purchaseTable))
                .where('user_id', userId)

            return purchaseById

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}