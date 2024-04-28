import {Router} from 'express'
import userRouter from "./apis/v1/router/user.router"
import analyzerRouter from "./apis/v1/router/analyzer.router"
import { checkTokenValid } from './midleware/authenticator'
const router = Router()

router.use("/v1/user", userRouter)
router.use(checkTokenValid)
router.use("/v1/analyzer", analyzerRouter)


export default router