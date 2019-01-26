import mysql = require('mysql');
import { Pool } from 'mysql';

export class DatabaseService {
    private static pool: Pool;
    private constructor() {

    }
    static async getInstance() {
        if (DatabaseService.pool) {
            DatabaseService.pool = await mysql.createPool({
                host: 'localhost',
                user: 'root',
                password: 'chanaka',
                database: 'shared_adult'
            });
        }
        return DatabaseService.pool;
    }
    static async query() {
        const result: any = await this.pool.query("select * from table");
        return result;
    }
}
