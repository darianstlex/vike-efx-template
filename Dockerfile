FROM node:20-alpine

WORKDIR /usr/app

COPY . .

EXPOSE 3000

RUN chown -R node /usr/app/

CMD [ "npm", "run", "server:prod" ]

USER node