import jwt from "jsonwebtoken";

const security = {
    adminCheck : (req, res, next) => {
        if (req.session.user && req.session.user.isadmin) {
            next();
        } else {
            return res.status(401).json('Forbidden');
        }
    },

    validateToken(req, res, next){
        try {
            const token = req.headers.authorization.split(" ")[1];
            const user = jwt.verify(token, process.env.SESSION_SECRET);
            req.session.user = user;
            next();
        } catch (error) {
            return res.status(401).json(error.message);
        }
    },
}

export {security};