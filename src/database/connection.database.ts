import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const configDatabase = {
    connectionString: process.env.DATABASE_URL,
    ssl: false
}

if(process.env.NODE_ENV === 'production') configDatabase.ssl = true;


export const connection = new Pool(configDatabase);
