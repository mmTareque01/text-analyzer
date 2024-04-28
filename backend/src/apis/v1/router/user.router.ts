import { Router } from "express";
import { signUp } from "../controller/user/signup.controller";
import { signIn } from "../controller/user/signin.controller";

const router = Router();


router.post("/signup", signUp)
router.post("/signin", signIn)

export default router