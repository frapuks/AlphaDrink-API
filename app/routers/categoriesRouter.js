import express from "express";
const categoriesRouter = express.Router();
import { categoriesController } from "../controllers/index.js";

categoriesRouter.get('/categories', categoriesController.getAllCategories);
categoriesRouter.get('/categories/drinks', categoriesController.getAllCategoriesWithDrinks);

export {categoriesRouter};


// * ---- SWAGGER DOC ---- * \\

// * SCHEMAS

/**
 * une catégorie
 * @typedef {object} categorie
 * @property {integer} id.required - id
 * @property {string} name.required - nom
*/

/**
 * une catégorie avec les boissons
 * @typedef {object} categorieWithDrinks
 * @property {integer} id.required - id
 * @property {string} name.required - nom
 * @property {array<drink>} drinks.required - liste des boissons
*/

// * ROUTES

/**
 * GET /categories
 * @summary Récupère toutes les catégories
 * @tags categories
 * @return {array<categorie>} 200 - success response - application/json
*/

/**
 * GET /categories/drinks
 * @summary Récupère toutes les catégories avec les boissons
 * @tags categories
 * @return {array<categorieWithDrinks>} 200 - success response - application/json
*/