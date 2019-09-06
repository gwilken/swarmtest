FROM node:10-alpine

COPY . .

RUN npm i

CMD ["node", "server"]
