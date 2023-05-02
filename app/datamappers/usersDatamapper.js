import {client} from "../services/database.js";

const usersDatamapper = {
    async getUser(email) {
        const sql = `
            SELECT *
            FROM "user"
            WHERE email = $1`;
        const values = [email];
        const result = await client.query(sql, values);
        return result.rows[0];
    }
};

export {usersDatamapper};