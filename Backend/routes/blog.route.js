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
  toggleTrending,
  getTrendingBlogs,
} from "../Controller/blog.controller.js";
import upload from '../middleware/multer.js'
// import multer from "multer";
// import { requireAuth } from "../middleware/authMiddleware.js"
const router=express.Router()
// const upload = multer();


router.post('/createblog',upload,CreateBlog)
router.get('/trending',getTrendingBlogs)
router.patch("/toggleTrending/:id", toggleTrending);
router.get("/getBlogs", getPendingBlogs);
router.get('/getBlog/:id',getBlog)
router.put('/update/:id',upload,updateBlog)
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




