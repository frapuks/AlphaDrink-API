import "dotenv/config";

// Express
import express from "express";
const app = express();

// Swagger doc
import expressJSDocSwagger from "express-jsdoc-swagger";
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const options = {
    info: {
      version: '1.0.0',
      title: 'AlphaDrink',
	  description: 'API Alpha Drink',
      license: {
        name: 'MIT',
      },
    },
    security: {
      TokenAuth : {
        type: 'http',
        scheme: 'bearer'
      }
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.js',
    swaggerUIPath: '/api-docs'
};
expressJSDocSwagger(app)(options);

// Session
import session from "express-session";
const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true,
	cookie: {
		secure: false,
		maxAge: (1000*60*60)
	},
};
app.use(session(sessionConfig));
app.use((req, res, next) => {
  if (req.session.user) {
  res.locals.user = req.session.user;
  }
  next();
});

// CORS
import cors from "cors";
app.use(cors());

// Json & Url encoded
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Router
import { router } from "./app/routers/index.js";
app.use(router);

// Launch server
const PORT = process.env.PORT ?? 3000;
app.listen(PORT,()=>{
    console.log(`Mon serveur est démarré sur http://localhost:${PORT}`);
});