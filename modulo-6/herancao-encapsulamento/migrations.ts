import { BaseDataBase } from "./src/database/BaseDataBase"

export class Migrations extends BaseDataBase {

    public createTables = async () => {

        await BaseDataBase.connection.raw(`
    DROP TABLE IF EXISTS "Labe_Users", "Labe_Products", "Labe_Purchases";
    
    CREATE TABLE IF NOT EXISTS "Labe_Users"(
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS "Labe_Products"(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(6,2) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS "Labe_Purchases"(
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        product_id VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        total_price DECIMAL(6,2) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES "Labe_Users"(id),
        FOREIGN KEY (product_id) REFERENCES "Labe_Products"(id)
    );
     `)

            .then(() => {
                console.log(`Tables created successfully!`)
            })
            .catch((error: any) => console.log(error.sqlMessage || error.message))
    }
}

const migrations = new Migrations()
migrations.createTables()