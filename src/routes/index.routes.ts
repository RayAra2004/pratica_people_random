import { getPeople } from "@/controllers/people.controllers";
import { Router } from "express";

const router = Router();
router.get("/person", getPeople)

export default router;