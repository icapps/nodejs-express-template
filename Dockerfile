FROM node:6
MAINTAINER iCapps <developer@icapps.com>

RUN echo lets get going with Docker

RUN set -ex && \
    curl -sS http://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install yarn lftp -y

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json yarn.lock /tmp/
# Copy cache contents (if any) from local machine
ADD .yarn-cache.tgz /
RUN cd /tmp && \
    yarn

RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD . /opt/app

# build the production code
RUN  yarn build

EXPOSE 1337
EXPOSE 5858

CMD ["yarn", "start"]

