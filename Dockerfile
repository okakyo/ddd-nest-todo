FROM node:17.2-alpine

WORKDIR /apps

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

# RUN yarn build

CMD yarn start:dev
