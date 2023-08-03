FROM node:18

WORKDIR /react-vite-veterinaria
# COPY package.json .
# RUN npm install

EXPOSE 3000

COPY . .
# CMD npm start