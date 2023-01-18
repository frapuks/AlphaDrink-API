import {datamapper} from "../datamapper.js";

const categoriesController = {
    async getAllCategories(req, res) {
        try {
            const categories = await datamapper.getAllCategories();
            return res.json(categories);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async getAllCategoriesWithDrinks(req, res) {
        try {
            const categories = await datamapper.getAllCategoriesWithDrinks();
            return res.json(categories);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    }
}

export {categoriesController};