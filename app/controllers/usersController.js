import {datamapper} from "../datamapper.js";
import bcrypt from "bcrypt";

const usersController = {
    async login(req, res) {
        try {
            const user = await datamapper.getUser(req.body.email);
            if (user && await bcrypt.compare(req.body.password, user.pwd)) {
                req.session.user = {
                    id : user.id,
                    name : `${user.firstname} ${user.lastname}`,
                    email : user.email,
                    role_id : user.role_id
                };
                return res.json(`${user.email} CONNECTED with role ${user.role_id}`);
            } else {
                return res.status(401).json('Authenfication failed');
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json(error.toString());
        }
    },

    logout(req, res) {
        req.session.user = null;
        return res.json('Logout !')
    }
}

export {usersController};