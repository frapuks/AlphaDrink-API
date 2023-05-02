import { searchDatamapper } from "../datamappers/index.js";

const searchController = {
    async search(req, res) {
        const form = req.body;
        try {
            const drinks = await searchDatamapper.search(form.search);
            return res.json(drinks);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export {searchController};