# ALPHA DRINK

API pour une application privée destinée à la gestion d'une carte de boissons.

# Technologies utilisées

- Node
- Express
- PostgreSQL
- CSS
- Javascript Vanilla

# Packages Npm

- Express
- Express-session
- Dotenv
- Pg
- Bcrypt
- Cors

# Auteurs

- [François G.](https://github.com/frapuks)
# Version

- v0 : conception du projet
- v1 (actuelle) : opérationnelle sur localhost ([Github AlphaDrink v1](https://github.com/frapuks/Alpha-drink))
- v2 (in progress) : Création d'une Api et d'un serveur Front

Github Project : [Kanban AlphaDrink](https://github.com/users/frapuks/projects/1/views/1)

# Ressources

- [mocodo.net](https://www.mocodo.net/)
- [figma.com](https://www.figma.com/)
- [insomnia.rest](https://insomnia.rest/)

# Lancement

TODO : A modifier !!!! (voir les infos dans le Kanban)

1. Clonage du repo
2. Installer postgreSQL
3. Créer un role et un database
4. Utiliser le nom du role et de la database pour mettre à jour les scripts `dbCreate`, `dbSeed` dans le fichier `package.json`
5. Création du fichier `.env` à partir du fichier `.env.example`
6. Installation des packages avec la commande `npm i`
7. Créations des données dans la BDD avec la commande `npm run dbReset`
8. Lancement du serveur avec la commande `npm start`
9. Pour utiliser les fonctionnalités de l'admin, il faut insérer manuellement les données, le mot de passe doit être hashé avec bcrypt, et le role_id doit être égal à 1