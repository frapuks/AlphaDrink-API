import {client} from "../services/database.js";

const drinksDatamapper = {
    async addDrink(form) {
        const sql = `
            INSERT INTO drink (name, maker, infos, isalcool, category_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`;
        const values = [form.name, form.maker, form.infos, form.isalcool, form.category_id];
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
        const sql = `
            SELECT drink.id, drink.name, drink.maker, drink.infos, drink.starscounter, drink.averagerate, drink.isalcool, drink.isavailable, drink.category_id, JSON_agg(review ORDER BY review.id) AS reviews
            FROM drink
            LEFT JOIN review ON drink.id = review.drink_id
            WHERE drink.id = $1
            GROUP BY drink.id, drink.name, drink.maker, drink.infos, drink.starscounter, drink.averagerate, drink.isalcool, drink.isavailable, drink.category_id`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    async updateOneDrink(id, form) {
        const sql = `
            UPDATE drink
            SET name = $1, maker = $2, infos = $3, isalcool = $4
            WHERE id = $5
            RETURNING *`;
        const values = [form.name, form.maker, form.infos, form.isalcool, id];
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

    async removestar(id) {
        const sql = `
            UPDATE drink
            SET starscounter = starscounter - 1
            WHERE drink.id = $1
            RETURNING *`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    }
};

export {drinksDatamapper};