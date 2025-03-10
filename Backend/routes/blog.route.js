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
  addComments,
  getApprovedComments,
  updateComment,
  deleteComment,
  getAllComments,
  approveComment,
} from "../Controller/blog.controller.js";
import upload from '../middleware/multer.js'
// import { requireAuth } from "../middleware/authMiddleware.js"
const router=express.Router()

router.post('/createblog',upload,CreateBlog)
router.get("/getBlogs", getPendingBlogs);
router.get('/getBlog/:id',getBlog)
router.put('/update/:id',updateBlog)
router.delete('/delete/:id',deleteBlog) 
router.put("/updateStatus/:id",updateBlogStatus);
router.get('/getAllBlogs',getAllBlogs)
router.get("/getApprovedBlogs", getApprovedBlogs);
router.post('/:id/createComment',addComments)
router.get("/:id/getApprovedComments",getApprovedComments );
router.get("/:id/getAllComments",getAllComments );
router.patch("/:blogId/updateComment/:commentId", updateComment);
router.delete("/:blogId/delete/:commentId", deleteComment);
router.patch("/:blogId/approveComment/:commentId", approveComment);
  


export default router




