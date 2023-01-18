import "dotenv/config";
import session from "express-session";
import { router } from "./app/router.js";
import cors from "cors";
import express from "express";
const app = express();

const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true,
	cookie: {
		secure: false,
		maxAge: (1000*60*60)
	},
};

app.use(cors());
app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use((req, res, next) => {
    if (req.session.user) {
		res.locals.user = req.session.user;
    }
    next();
});

app.use(router);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT,()=>{
    console.log(`Mon serveur est démarré sur http://localhost:${PORT}`);
});