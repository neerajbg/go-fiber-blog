FROM nginx:alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf 

WORKDIR /blog

COPY ./client/build /var/www/html

COPY ./server/.env.prod .

COPY ./server/build/server .

COPY ./startup.sh .

EXPOSE 80
EXPOSE 8000

ENTRYPOINT [ "/bin/sh", "startup.sh" ]