import express from "express";
import multer from "multer";
import userRoute from "./routes/user.route.js";

const app = express();

const mul = multer();
app.use(mul.any());

// User routes
app.use("/api/v1/user", userRoute);

export default app;

/**
 * User
 *  add/edit/delete blog
 *  saved blog
 *  liked blog
 *  my blogs
 *  my mentioned blog
 *
 * Blog
 *  like
 *  comment
 *  mentioned other user
 *  category
 *  #hashtag
 *  single image (optional -> might implement)
 *  description
 *
 * Blog list
 *  search by name, category
 *  filter via category, popularity (where more likes), newest
 *  pagination, limits
 *
 * Blog Details
 *  whole blog details
 *  related blogs
 *  shareable link
 *  likes
 *  comments
 *  tagged user list
 */

/**
 * relevant blogs
 * home blogs
 * comments -> nested comments -> 1 layer nested and many layer nested
 * save parent id in comments
 * and create schema for every nested commetns
 * metioned other users implement inline tagging
 * flatten category before saving to db so can implement nested category
 * res.data = []
 * res.data = {}
 */

/**
 *   User
 * full name
 * email
 * password
 * refresh token
 * my blogs: from blog model
 * saved blogs from blog model
 * liked blogs from blog model
 * mentioned blogs from blog model
 *
 *   Blog
 * title
 * description
 * like
 * comment []
 * mentioned user id []
 * category: from cateroty model
 *
 *   Comment
 * parentCommentId
 * comment content
 *
 *   Category
 * category title
 *
 */
