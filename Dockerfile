FROM node:16-alpine as development

COPY package*.json ./
RUN npm install

FROM node:16-alpine As build

COPY package*.json ./
COPY --from=development /node_modules ./node_modules
COPY public/ ./public
COPY src/ ./src
RUN npm run build

FROM node:16-alpine

COPY package*.json ./
COPY --from=development /node_modules ./node_modules
RUN npm prune --production
COPY --from=build public/ ./public/
COPY --from=build src/ ./src

CMD ["npm", "start"]