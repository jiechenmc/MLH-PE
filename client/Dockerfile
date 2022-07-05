FROM node

WORKDIR /client/src
COPY package.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "dev", "--", "--host" ]

EXPOSE 80