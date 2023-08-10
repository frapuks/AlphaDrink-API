FROM node:18-alpine

WORKDIR /server/

COPY . /server/

RUN npm install

CMD ["npm", "start"]

EXPOSE 4102