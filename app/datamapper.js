import {client} from "./database.js";

const datamapper = {
    // ---------------Categories--------------- \\
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
    },

    // ---------------Drinks--------------- \\
    async addDrink(body) {
        const category_id = parseInt(body.category_id);
        const sql = `
            INSERT INTO drink (name, maker, infos, isalcool, category_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`;
        const values = [body.name, body.maker, body.infos, body.isalcool ? true : false, category_id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    async getOneDrink(id) {
        const sql = `
            SELECT *
            FROM drink
            WHERE drink.id = $1`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },
    
    async getOneDrinkWithReviews(id) {
        // get all drink's infos with reviews
        const sql = `
            SELECT drink.id, drink.name, drink.maker, drink.infos, drink.starscounter, drink.averagerate, drink.stock, drink.isalcool, drink.isavailable, drink.category_id, JSON_agg(review ORDER BY review.id) AS reviews
            FROM drink
            JOIN review ON drink.id = review.drink_id
            WHERE drink.id = $1
            GROUP BY drink.id, drink.name, drink.maker, drink.infos, drink.starscounter, drink.averagerate, drink.stock, drink.isalcool, drink.isavailable, drink.category_id`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows;
    },

    async updateOneDrink(id, body) {
        const sql = `
            UPDATE drink
            SET name = $1, maker = $2, infos = $3, isalcool = $4
            WHERE id = $5
            RETURNING *`;
        const values = [body.name, body.maker, body.infos, body.isalcool, id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    async deleteOneDrink(id) {
        const sql = `
            DELETE FROM drink
            WHERE id = $1`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rowCount;
    },

    async isavailable(id) {
        const sql = `
            UPDATE drink
            SET isavailable = true
            WHERE id = $1
            RETURNING *`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    async unavailable(id) {
        const sql = `
            UPDATE drink
            SET isavailable = false
            WHERE id = $1
            RETURNING *`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    async addstar(id) {
        const sql = `
            UPDATE drink
            SET starscounter = starscounter + 1
            WHERE drink.id = $1
            RETURNING *`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    // ---------------Reviews--------------- \\
    async deleteReviewsByDrinkId(id) {
        const sql = `
            DELETE FROM review
            WHERE drink_id = $1`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rowCount;
    },

    async addReview(body) {
        const sql = `
            INSERT INTO review (name, date, rate, content, drink_id)
            VALUES ($1, $2, $3, $4, $5)`;
        const values = [body.name, new Date(), body.rate, body.contentReview, body.drink_id];
        const result = await client.query(sql, values);
        return result.rowCount;
    },

    async updateAverageRate(id) {
        const sql = `
            UPDATE drink
            SET averagerate = (SELECT ROUND(AVG(rate)) FROM review WHERE drink_id = $1)
            WHERE drink.id = $2;`;
        const values = [id, id];
        const result = await client.query(sql, values);
        return result.rowCount;
    },

    async deleteReview(id) {
        // returning drink_id to update this drink's averageRate
        const sql = `
            DELETE FROM review
            WHERE id = $1
            RETURNING drink_id`;
        const values = [id];
        const result = await client.query(sql, values);
        return result;
    },

    // ---------------Users--------------- \\
    async getUser(email) {
        const sql = `
            SELECT *
            FROM "user"
            WHERE email = $1`;
        const values = [email];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    // ---------------Search--------------- \\
    async search(string) {
        const sql = `
            SELECT *
            FROM "drink"
            WHERE name ILIKE $1`;
        const values = [`%${string}%`];
        const result = await client.query(sql, values);
        return result.rows;
    }
};

export {datamapper};