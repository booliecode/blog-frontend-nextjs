# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=development

WORKDIR /backend

COPY ["./backend/" "./"]

RUN npm install

COPY . .