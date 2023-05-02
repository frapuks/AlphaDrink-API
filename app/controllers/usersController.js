import { usersDatamapper } from "../datamappers/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const usersController = {
    async login(req, res) {
        const form = req.body;
        try {
            const user = await usersDatamapper.getUser(form.email);
            if(!user) throw new Error('Error email or password');
            
            const isValidPassword = await bcrypt.compare(form.password, user.pwd);
            if(!isValidPassword) throw new Error('Error email or password');

            delete user.pwd;
            req.session.user = user;
            const token = jwt.sign(user, process.env.SESSION_SECRET, {expiresIn: '7 days'});
            
            return res.json({user, token});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    logout(req, res) {
        req.session.user = null;
        return res.json('Logout !')
    }
}

export {usersController};