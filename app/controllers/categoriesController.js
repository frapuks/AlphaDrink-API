import { categoriesDatamapper } from "../datamappers/index.js";

const categoriesController = {
    async getAllCategories(req, res) {
        try {
            const categories = await categoriesDatamapper.getAllCategories();
            return res.json(categories);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async getAllCategoriesWithDrinks(req, res) {
        try {
            const categories = await categoriesDatamapper.getAllCategoriesWithDrinks();
            return res.json(categories);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export {categoriesController};