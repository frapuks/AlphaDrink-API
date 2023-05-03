import {client} from "../services/database.js";

const reviewsDatamapper = {
    async addReview(body) {
        const sql = `
            INSERT INTO review (name, date, rate, content, drink_id)
            VALUES ($1, $2, $3, $4, $5)`;
        const values = [body.name, new Date(), body.rate, body.content, body.drink_id];
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
        // returning drink_id to update drink averageRate
        const sql = `
            DELETE FROM review
            WHERE id = $1
            RETURNING *`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    }
};

export {reviewsDatamapper};