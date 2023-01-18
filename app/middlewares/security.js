const security = {
    adminCheck : (req, res, next) => {
        if (req.session.user && req.session.user.role_id === 1) {
            next();
        } else {
            return res.status(401).json('Forbidden');
        }
    }
}

export {security};