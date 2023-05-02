import express from "express";
const drinksRouter = express.Router();
import { drinksController } from "../controllers/drinksController.js";
import { security } from "../services/security.js";

drinksRouter.post('/drinks', security.validateToken, security.adminCheck, drinksController.addDrink);
drinksRouter.get('/drinks/:id', drinksController.getOneDrink);
drinksRouter.get('/drinks/:id/reviews', drinksController.getOneDrinkWithReviews);
drinksRouter.patch('/drinks/:id', security.validateToken, security.adminCheck, drinksController.updateOneDrink);
drinksRouter.patch('/drinks/:id/isavailable', security.validateToken, security.adminCheck, drinksController.isavailable);
drinksRouter.patch('/drinks/:id/unavailable', security.validateToken, security.adminCheck, drinksController.unavailable);
drinksRouter.patch('/drinks/:id/addstar', drinksController.addstar);
drinksRouter.delete('/drinks/:id', security.validateToken, security.adminCheck, drinksController.deleteOneDrink);

export {drinksRouter};


// * ---- SWAGGER DOC ---- * \\

// * SCHEMAS

/**
 * une boisson
 * @typedef {object} drink
 * @property {integer} id.required - id
 * @property {string} name.required - nom
 * @property {string} maker.required - fabriquant
 * @property {string} infos.required - infos
 * @property {integer} starscounter.required - nombre de likes
 * @property {integer} averagerate.required - note moyenne sur 5
 * @property {integer} stock.required - stock
 * @property {boolean} isalcool.required - présence d'alcool
 * @property {boolean} isavailable.required - disponibilité
 * @property {integer} category_id.required - id de la catégorie
*/

/**
 * une boisson
 * @typedef {object} drinkWithReviews
 * @property {integer} id.required - id
 * @property {string} name.required - nom
 * @property {string} maker.required - fabriquant
 * @property {string} infos.required - infos
 * @property {integer} starscounter.required - nombre de likes
 * @property {integer} averagerate.required - note moyenne sur 5
 * @property {integer} stock.required - stock
 * @property {boolean} isalcool.required - présence d'alcool
 * @property {boolean} isavailable.required - disponibilité
 * @property {integer} category_id.required - id de la catégorie
 * @property {array<review>} reviews.required - id de la catégorie
*/

/**
 * formulaire de mise à jour d'une boisson
 * @typedef {object} formUpdateDrink
 * @property {string} name.required - nom
 * @property {string} maker.required - fabriquant
 * @property {string} infos.required - infos
 * @property {boolean} isalcool.required - présence d'alcool
*/

/**
 * formulaire de création d'une boisson
 * @typedef {object} formCreateDrink
 * @property {string} name.required - nom
 * @property {string} maker.required - fabriquant
 * @property {string} infos.required - infos
 * @property {boolean} isalcool.required - présence d'alcool
 * @property {integer} category_id.required - id de la catégorie
*/

// * ROUTES

/**
 * POST /drinks
 * @summary ajoute une boisson
 * @security TokenAuth
 * @tags drink
 * @param {formCreateDrink} request.body.required - infos
 * @return {drink} 200 - success response - application/json
*/

/**
 * GET /drinks/{id}
 * @summary Récupère toutes les infos d'une boisson
 * @tags drink
 * @param {integer} id.path - id
 * @return {drink} 200 - success response - application/json
*/

/**
 * GET /drinks/{id}/reviews
 * @summary Récupère toutes les infos d'une boisson avec ses commentaires
 * @tags drink
 * @param {integer} id.path - id
 * @return {drinkWithReviews} 200 - success response - application/json
*/

/**
 * PATCH /drinks/{id}
 * @summary modifie les infos d'une boisson
 * @security TokenAuth
 * @tags drink
 * @param {integer} id.path - id
 * @param {formUpdateDrink} request.body.required - formulaire
 * @return {drink} 200 - success response - application/json
*/

/**
 * PATCH /drinks/{id}/isavailable
 * @summary rend disponible une boisson
 * @security TokenAuth
 * @tags drink
 * @param {integer} id.path - id
 * @return {drink} 200 - success response - application/json
*/

/**
 * PATCH /drinks/{id}/unavailable
 * @summary rend indisponible une boisson
 * @security TokenAuth
 * @tags drink
 * @param {integer} id.path - id
 * @return {drink} 200 - success response - application/json
*/

/**
 * PATCH /drinks/{id}/addstar
 * @summary ajoute un like à une boisson
 * @tags drink
 * @param {integer} id.path - id
 * @return {drink} 200 - success response - application/json
*/

/**
 * DELETE /drinks/{id}
 * @summary supprime une boisson
 * @security TokenAuth
 * @tags drink
 * @param {integer} id.path - id
 * @return {drink} 200 - success response - application/json
*/