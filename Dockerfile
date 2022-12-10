FROM node:14-alpine

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY . .

RUN npm install && npm update

CMD npm start

EXPOSE 3000
