import { drinksDatamapper } from "../datamappers/index.js";

const drinksController = {
    async addDrink(req, res) {
        const form = req.body;
        try {
            const newDrink = await drinksDatamapper.addDrink(form);
            return res.json(newDrink);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async getOneDrink(req, res) {
        const drinkId = +req.params.id;
        try {
            const drink = await drinksDatamapper.getOneDrink(drinkId);
            return res.json(drink);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    
    async getOneDrinkWithReviews(req, res) {
        const drinkId = +req.params.id;
        try {
            const drink = await drinksDatamapper.getOneDrinkWithReviews(drinkId);
            return res.json(drink);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async updateOneDrink(req, res) {
        const form = req.body;
        const drinkId = +req.params.id;
        try {
            const drink = await drinksDatamapper.updateOneDrink(drinkId, form);
            return res.json(drink);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async deleteOneDrink(req, res) {
        const drinkId = +req.params.id;
        try {
            const deletedDrinks = await drinksDatamapper.deleteOneDrink(drinkId);
            return res.json(`drinks & reviews deleted : ${deletedDrinks}`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async isavailable(req, res) {
        const drinkId = +req.params.id;
        try {
            const drink = await drinksDatamapper.isavailable(drinkId);
            return res.json(drink);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async unavailable(req, res) {
        const drinkId = +req.params.id;
        try {
            const drink = await drinksDatamapper.unavailable(drinkId);
            return res.json(drink);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async addstar(req, res) {
        const drinkId = +req.params.id;
        try {
            const drink = await drinksDatamapper.addstar(drinkId);
            return res.json(drink);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export {drinksController};