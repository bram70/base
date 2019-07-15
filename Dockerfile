FROM node:6.9

RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list

RUN apt-get update

RUN apt-get install --no-install-recommends -y wget nano curl supervisor make g++ bzip2 python-software-properties

RUN mkdir -p /var/log/supervisor
RUN rm -rf /var/lib/apt/lists/*

ADD package.json /dist/package.json

RUN mkdir /dist/node_modules

RUN npm install --prefix dist/

ADD . /app

VOLUME /app

WORKDIR /app

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8021 9001

CMD sh startup_server.sh
