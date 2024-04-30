FROM node:20-alpine

RUN apt-get update && apt-get install -y ca-certificates

ENV HOME=/opt/app NODE_ENV=production PORT=3000

WORKDIR $HOME

COPY package*.json $HOME/

ARG CI_JOB_TOKEN

RUN npm install && npm cache clean --force

COPY . $HOME

RUN npm install --production=false --no-optional \
    && npm run build \
    && npm prune --production \
    && npm cache clean --force


EXPOSE $PORT

CMD ["npm", "run", "start"]

