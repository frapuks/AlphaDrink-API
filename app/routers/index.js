import express from "express";
const router = express.Router();

// Main
import { mainRouter } from "./mainRouter.js";
router.use(mainRouter);

// Categories
import { categoriesRouter } from "./categoriesRouter.js";
router.use(categoriesRouter);

// Drinks
import { drinksRouter } from "./drinksRouter.js";
router.use(drinksRouter);

// Reviews
import { reviewsRouter } from "./reviewsRouter.js";
router.use(reviewsRouter);

// Searchs
import { searchRouter } from "./searchRouter.js";
router.use(searchRouter);

// Users
import { usersRouter } from "./usersRouter.js";
router.use(usersRouter);

// 404
router.use((_,res)=>{
    return res.status(404).json('erreur 404');
});

export {router};