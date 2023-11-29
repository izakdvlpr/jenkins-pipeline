FROM docker.io/node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src ./src

CMD ["npm", "start"]