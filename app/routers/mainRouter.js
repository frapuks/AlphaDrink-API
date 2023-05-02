import express from "express";
const mainRouter = express.Router();
import { mainController } from "../controllers/mainController.js";

mainRouter.get('/', mainController.homepage);

export {mainRouter};