FROM node:14.4-alpine3.11

ENV NODE_ENV=production
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8000
CMD [ "npm", "start" ]