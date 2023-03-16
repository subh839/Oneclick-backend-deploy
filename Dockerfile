FROM node:19
WORKDIR /app-img
COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]