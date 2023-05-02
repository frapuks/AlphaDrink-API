import express from "express";
const reviewsRouter = express.Router();
import { reviewsController } from "../controllers/reviewsController.js";
import { security } from "../services/security.js";

reviewsRouter.post('/reviews', reviewsController.addReview);
reviewsRouter.delete('/reviews/:id', security.validateToken, security.adminCheck, reviewsController.deleteReview);

export {reviewsRouter};


// * ---- SWAGGER DOC ---- * \\

// * SCHEMAS

/**
 * un commentaire
 * @typedef {object} review
 * @property {integer} id.required - id
 * @property {string} name.required - nom de l'utilisateur
 * @property {date} date.required - date
 * @property {string} content.required - infos
 * @property {integer} rate.required - nombre de likes
 * @property {integer} user_id.required - note moyenne sur 5
 * @property {integer} drink_id.required - stock
*/

/**
 * un commentaire
 * @typedef {object} formCreateReview
 * @property {string} name.required - nom de l'utilisateur
 * @property {integer} rate.required - nombre de likes
 * @property {string} content.required - infos
 * @property {integer} drink_id.required - stock
*/

// * ROUTES

/**
 * POST /reviews
 * @summary ajoute un commetaire
 * @tags review
 * @param {formCreateReview} request.body.required - commentaire
 * @return {string} 200 - success response - application/json
*/

/**
 * DELETE /reviews/{id}
 * @summary ajoute un commetaire
 * @security TokenAuth
 * @tags review
 * @param {integer} id.path - id
 * @return {string} 200 - success response - application/json
*/