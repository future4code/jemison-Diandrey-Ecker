"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations = void 0;
const BaseDataBase_1 = require("./src/database/BaseDataBase");
class Migrations extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.createTables = async () => {
            await BaseDataBase_1.BaseDataBase.connection.raw(`
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
                console.log(`Tables created successfully!`);
            })
                .catch((error) => console.log(error.sqlMessage || error.message));
        };
    }
}
exports.Migrations = Migrations;
const migrations = new Migrations();
migrations.createTables();
//# sourceMappingURL=migrations.js.map