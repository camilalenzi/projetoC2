FROM node:14-alpine

WORKDIR /urs/src/api

COPY . package*.json ./


RUN npm install

COPY . .

EXPOSE 3001



CMD npm start

## npm start for production 
## npm run dev for development