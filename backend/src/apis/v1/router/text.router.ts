import { Router } from "express";
import { createText } from "../controller/text/createText.controller";

const router = Router();

router.post("/text/create", createText)

export default router