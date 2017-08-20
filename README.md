# _OLLIE_NAME_START_CASE_

## Dependencies

- [Docker](https://www.docker.com)
- [Yarn](https://yarnpkg.com)
<!-- - [Nvm](https://github.com/creationix/nvm) -->


## Development

### Get started

#### 1. Run the setup script
Run setup script wich:
- installs node modules through yarn
- creates the development database
- creates .env

```bash
$ ./scripts/setup.sh
```

Start database

```bash
$ docker-compose up -d
```


Check docker processes to ensure the database service is up.

```bash
$ docker-compose ps
```

Create the database


### Npm scripts

#### `yarn start`

Run the app for production.

#### `yarn run watch`

Run the app for development. With this invokation, nodemon is used for an automated restart on file change.
(Currently) not used in any docker compose configuration.


## Test

Test during development:

```bash
$ npm run test:contract:care
$ npm run test:contract:handheld

# or run both
$ npm run test:contract
```


Test on isolated enviroment:

```bash
./scripts/test.sh
```


## Deployment

Deployment to Heroku through a Docker container is pretty simple. The following steps are a summary of [https://devcenter.heroku.com/articles/container-registry-and-runtime]()


### Deployment

Simple as:

```bash
$ ./scripts/deploy.sh
```

