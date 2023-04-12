FROM node:14.21-alpine AS build

WORKDIR /app

COPY package.json package.json

RUN npm install global yarn

RUN yarn install


FROM node:14.21-alpine

WORKDIR /app

COPY --from=build /app/node_modules /app/node_modules

COPY . /app

COPY tsconfig.build.json .

RUN yarn build n-layer

RUN ls -la

EXPOSE 4000

CMD ["node", "dist/apps/n-layer/main.js"]