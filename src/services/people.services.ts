import { People } from "@/controllers/people.controllers";
import { repository } from "@/repositories/people.repository"

async function getPeople(): Promise<People>{
    const peoples = await repository.getPeople();
    const num = Math.floor(Math.random() * ((peoples.rowCount - 1) + 1));

    return peoples.rows[num];
}

export const service = {
    getPeople
}