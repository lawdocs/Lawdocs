import express from "express"
const router=express.Router()
import { saveUser } from "../Controller/user.controller.js"

router.post('/save-user',saveUser)

export default router




