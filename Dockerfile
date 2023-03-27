FROM node:16-alpine3.14

WORKDIR /app

RUN npm install --fg yarn
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 4000
RUN yarn start n-layer
