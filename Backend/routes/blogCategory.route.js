import express from "express"
const router=express.Router()
import {
  getCategories,
  deleteCategory,
  createCategory,
  updateCategory,
} from "../Controller/blogCategory.controller.js";

router.post('/create',createCategory)
router.get('/all',getCategories)
router.delete('/delete/:id',deleteCategory)
router.put('/update/:id',updateCategory)

export default router




