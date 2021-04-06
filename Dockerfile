FROM node:12.19.0

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
COPY . /app/

RUN npm install
RUN npm i -g sequelize-cli
RUN npm init -y
RUN npm i -S sequelize mysql2
RUN sequelize db:create
RUN sequelize db:migrate

EXPOSE 3000

CMD ["npm", "start"]