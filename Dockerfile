FROM node:13.12.0-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]