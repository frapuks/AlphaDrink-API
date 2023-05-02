import { reviewsDatamapper } from "../datamappers/index.js";

const reviewsController = {
    async addReview(req, res) {
        const form = req.body;
        const drinkId = +form.drink_id;
        try {
            const createdReviews = await reviewsDatamapper.addReview(form);
            const updatedRate = await reviewsDatamapper.updateAverageRate(drinkId);
            return res.json(`Reviews created : ${createdReviews} / updated average rate : ${updatedRate ? true : false}`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async deleteReview(req, res) {
        const reviewId = +req.params.id;
        try {
            // delete review
            const reviewDeleted = await reviewsDatamapper.deleteReview(reviewId);
            // update average rate
            const drinkId = reviewDeleted.drink_id;
            const updatedRate = await reviewsDatamapper.updateAverageRate(drinkId);
            // return
            return res.json(`Review deleted / updated average rate : ${updatedRate ? true : false}`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export {reviewsController};