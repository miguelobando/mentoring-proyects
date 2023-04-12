FROM node:12.19-alpine AS build

WORKDIR /app

COPY package.json package.json

RUN ls -la /app

RUN npm install global yarn

RUN yarn install

FROM node:12.19-alpine

WORKDIR /app

RUN mkdir -p app/node_modules

COPY --from=build /app/node_modules /app/node_modules

COPY . /app/

COPY tsconfig.build.json .

RUN yarn build n-layer

RUN ls -la

EXPOSE 4000

CMD ["node", "dist/main.js"]