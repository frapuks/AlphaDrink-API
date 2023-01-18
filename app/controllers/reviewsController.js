import {datamapper} from "../datamapper.js";

const reviewsController = {
    async addReview(req, res) {
        try {
            const drinkId = parseInt(req.body.drink_id)
            const createdReviews = await datamapper.addReview(req.body);
            const updatedRate = await datamapper.updateAverageRate(drinkId);
            return res.json(`Reviews created : ${createdReviews} / updated average rate : ${updatedRate ? true : false}`);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    async deleteReview(req, res) {
        try {
            const reviewId = parseInt(req.params.id)
            const result = await datamapper.deleteReview(reviewId);
            const drinkId = result.rows[0].drink_id;
            const updatedRate = await datamapper.updateAverageRate(drinkId);
            return res.json(`Reviews deleted : ${result.rowCount} / updated average rate : ${updatedRate ? true : false}`);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    }
}

export {reviewsController};