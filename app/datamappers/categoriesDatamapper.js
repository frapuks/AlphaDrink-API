import {client} from "../services/database.js";

const categoriesDatamapper = {
    async getAllCategories() {
        const sql = `
            SELECT *
            FROM category
            ORDER BY category.name`;
        const result = await client.query(sql);
        return result.rows;
    },

    async getAllCategoriesWithDrinks(){
        const sql = `
            SELECT category.id, category.name, JSON_agg(drink ORDER BY drink.id) AS drinks
            FROM category
            JOIN drink ON category.id = drink.category_id
            GROUP BY category.id, category.name
            ORDER BY category.name`;
        const result = await client.query(sql);
        return result.rows;
    }
};

export {categoriesDatamapper};