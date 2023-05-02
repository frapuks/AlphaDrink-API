import {client} from "../services/database.js";

const searchDatamapper = {
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

export {searchDatamapper};