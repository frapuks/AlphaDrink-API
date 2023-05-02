import express from "express";
const usersRouter = express.Router();
import { usersController } from "../controllers/usersController.js";

usersRouter.post('/users/login', usersController.login);
usersRouter.post('/users/logout', usersController.logout);

export {usersRouter};


// * ---- SWAGGER DOC ---- * \\

// * SCHEMAS

/**
 * formulaire de connexion
 * @typedef {object} formLogin
 * @property {string} email.required - email
 * @property {string} password.required - mot de passe
*/

/**
 * informations d'un utilisateur
 * @typedef {object} user
 * @property {integer} id.required - id
 * @property {string} firstname.required - prénom
 * @property {string} lastname.required - nom
 * @property {string} email.required - email
 * @property {integer} role_id.required - role
*/

/**
 * infos renvoyées lors d'une connexion
 * @typedef {object} userConnected
 * @property {user} user.required - infos de l"utilisateur
 * @property {string} token.required - token
*/

// * ROUTES

/**
 * POST /users/login
 * @summary connexion
 * @tags auth
 * @param {formLogin} request.body.required - formulaire de connexion
 * @return {userConnected} 200 - success response - application/json
*/

/**
 * POST /users/logout
 * @summary deconnexion
 * @tags auth
 * @return {string} 200 - success response - application/json
*/