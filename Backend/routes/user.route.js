import express from "express"
const router=express.Router()
import { saveUser,getUser } from "../Controller/user.controller.js"

router.post('/save-user',saveUser)
router.get('/get-user',getUser)

export default router




