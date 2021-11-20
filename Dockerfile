FROM node:alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9005

ENTRYPOINT ["node"]

CMD ["Movies.js"]