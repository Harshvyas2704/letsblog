import express from "express";
import multer from "multer";
const app = express();

const mul = multer();
app.use(mul.any());

export default app;
