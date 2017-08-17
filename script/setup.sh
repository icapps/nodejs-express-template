#!/usr/bin/env
echo  "\t\033[94m
#############################################################
This is the setup script for the nodejs-express-template
This script was spesificaly written for Dev
Don't run this in production
---
#############################################################
\033[0m"

echo "\t\033[34m \n\nReady? (y/n)\033[0m"
read answer
if echo "$answer" | grep -iq "^y" ;then
    echo ""
else
    exit 1
fi
echo  "\t\033[32m
-----------------------------------------
------------ Setup Env 🔨  ---------------
-----------------------------------------
\033[0m"
touch .env
echo "\t\033[34m \n\n NODE_ENV=development (enter/name)\033[0m"
read answer
if echo "$answer" | grep -iq "" ;then
  echo 'NODE_ENV=development' >> .env
else
  echo "NODE_ENV="$answer >> .env
fi

echo "\t\033[34m \n\n PORT=3000 (enter/number)\033[0m"
read answer
if echo "$answer" | grep -iq "" ;then
  echo 'PORT=3000' >> .env
else
  echo "PORT="$answer >> .env
fi
echo "\t\033[34m \n\n BASE_PATH=/api/v1 (enter/name)\033[0m"
read answer
if echo "$answer" | grep -iq "" ;then
  echo 'BASE_PATH=/api/v1' >> .env
else
  echo "BASE_PATH="$answer >> .env
fi
echo "\t\033[34m \n\n SENTRY_DSN=https://*****@sentry.io/**** (enter/name)\033[0m"
read answer
if echo "$answer" | grep -iq "" ;then
  echo 'SENTRY_DSN=https://*****@sentry.io/****' >> .env
else
  echo "SENTRY_DSN="$answer >> .env
fi

echo  "\t\033[32m
---------------------------------------------------
------------ Install dependenties ⚙️  ---------------
---------------------------------------------------
\033[0m"
yarn
echo  "\t\033[32m
-----------------------------------------
------------ build app ⚙️  ---------------
-----------------------------------------
\033[0m"
yarn build

echo "\t\033[34m
-----------------------------------------------------------------
----------------- Start app and Containers 🐳  -------------------
-----------------------------------------------------------------
\033[0m"
docker-compose up -d

yarn run serve
