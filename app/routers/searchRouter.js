import express from "express";
const searchRouter = express.Router();
import { searchController } from "../controllers/searchController.js";

searchRouter.post('/search', searchController.search)

export {searchRouter};


// * ---- SWAGGER DOC ---- * \\

// * SCHEMAS

/**
 * formulaire de recherche
 * @typedef {object} formSearch
 * @property {string} search.required - recherche
*/

// * ROUTES


/**
 * POST /search
 * @summary recherche une boisson
 * @tags search
 * @param {formSearch} request.body.required - recherche
 * @return {array<drink>} 200 - success response - application/json
*/