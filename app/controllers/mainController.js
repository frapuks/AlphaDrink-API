import {datamapper} from "../datamapper.js";

const mainController = {
    async homepage(req, res) {
        return res.send('Hello World');
    }
}

export {mainController};