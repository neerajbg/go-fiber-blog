#!/bin/sh

mv .env.prod .env
rm .env.prod

chmod +x ./server
nginx -g "daemon on;" & ./server