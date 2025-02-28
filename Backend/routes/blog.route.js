import express from "express"
import {
  CreateBlog,
  getPendingBlogs,
  updateBlog,
  deleteBlog,
  getBlog,
  updateBlogStatus,
  getAllBlogs,
  getApprovedBlogs,
} from "../Controller/blog.controller.js";
import upload from '../middleware/multer.js'
// import { requireAuth } from "../middleware/authMiddleware.js"
const router=express.Router()

router.post('/createblog',upload.single('image'),CreateBlog)
router.get("/getBlogs", getPendingBlogs);
router.get('/getBlog/:id',getBlog)
router.put('/update/:id',updateBlog)
router.delete('/delete/:id',deleteBlog)
router.put("/updateStatus/:id",updateBlogStatus);
router.get('getAllBlogs',getAllBlogs)
router.get("getApprovedBlogs", getApprovedBlogs);


export default router




