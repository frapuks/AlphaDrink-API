import {datamapper} from "../datamapper.js";

const drinksController = {
    async addDrink(req, res) {
        try {
            const newDrink = await datamapper.addDrink(req.body);
            return res.json(newDrink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async getOneDrink(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.getOneDrink(drinkId);
            return res.json(drink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },
    
    async getOneDrinkWithReviews(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.getOneDrinkWithReviews(drinkId);
            return res.json(drink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async updateOneDrink(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.updateOneDrink(drinkId, req.body);
            return res.json(drink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async deleteOneDrink(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const deletedDrinks = await datamapper.deleteOneDrink(drinkId);
            const deletedReviews = await datamapper.deleteReviewsByDrinkId(drinkId);
            return res.json(`drinks deleted : ${deletedDrinks} / reviews deleted : ${deletedReviews}`);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async isavailable(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.isavailable(drinkId);
            return res.json(drink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async unavailable(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.unavailable(drinkId);
            return res.json(drink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async addstar(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.addstar(drinkId);
            return res.json(drink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    }
}

export {drinksController};