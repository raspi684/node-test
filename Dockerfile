FROM node:20.10 as builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20.10-alpine

USER node
ENV NODE_ENV production
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --production
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD [ "node", "dist/index.js" ]
