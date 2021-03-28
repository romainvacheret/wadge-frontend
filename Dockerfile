FROM node:11

# Create code app directory

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]