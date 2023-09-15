import { People } from "@/controllers/people.controllers";
import { connection } from "@/database/connection.database"

async function getPeople(){
    const peoples = await connection.query(`SELECT * FROM people;`);

    return peoples;
}

export const repository = {
    getPeople
}