import { service } from "@/services/people.services";
import { Request, Response } from "express";

export type People = {
    id: number,
    firstName: string,
    lastName: string
}

export async function getPeople(req: Request, res: Response): Promise<void>{
    const person: People =  await service.getPeople();

    res.send(person);
};