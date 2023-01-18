import {datamapper} from "../datamapper.js";

const searchController = {
    async search(req, res) {
        try {
            const searchStr = req.body.search;
            const drinks = await datamapper.search(searchStr);
            return res.json(drinks);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    }
}

export {searchController};