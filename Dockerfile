FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "tsconfig.json", "./"]
RUN npm install 
COPY . .

RUN npm run build
EXPOSE 3000
CMD npm start