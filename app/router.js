import express from "express";
const router = express.Router();
import { mainController } from "./controllers/mainController.js";
import { categoriesController } from "./controllers/categoriesController.js";
import { drinksController } from "./controllers/drinksController.js";
import { reviewsController } from "./controllers/reviewsController.js";
import { usersController } from "./controllers/usersController.js";
import { searchController } from "./controllers/searchController.js";
import { security } from "./middlewares/security.js";

router.get('/', mainController.homepage);

// Catégories
router.get('/categories', categoriesController.getAllCategories);
router.get('/categories/drinks', categoriesController.getAllCategoriesWithDrinks);

// Drinks
router.post('/drinks', security.adminCheck, drinksController.addDrink);
router.get('/drinks/:id', drinksController.getOneDrink);
router.get('/drinks/:id/reviews', drinksController.getOneDrinkWithReviews);
router.patch('/drinks/:id', security.adminCheck, drinksController.updateOneDrink);
router.patch('/drinks/:id/isavailable', security.adminCheck, drinksController.isavailable);
router.patch('/drinks/:id/unavailable', security.adminCheck, drinksController.unavailable);
router.patch('/drinks/:id/addstar', drinksController.addstar);
router.delete('/drinks/:id', security.adminCheck, drinksController.deleteOneDrink);

// Reviews
router.post('/reviews', reviewsController.addReview);
router.delete('/reviews/:id', security.adminCheck, reviewsController.deleteReview);

// Users
router.post('/users/login', usersController.login);
router.get('/users/logout', usersController.logout);

// Search
router.post('/search', searchController.search)



router.use((req,res)=>{
    return res.status(404).send('erreur');
});

export {router};