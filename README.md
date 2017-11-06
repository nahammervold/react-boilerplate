# react-boilerplate
Boilerplate code for React. This boilerplate has webpack set up so that we could use sass and React with the latest javascript ECMA script standards. This boilerplate also contains docker and docker-compose files setup for development and production.

## Prerequisites
1. [Node Package Manager](https://github.com/creationix/nvm) used for dependancies

2. [Webpack](https://webpack.js.org/) (should be installed globally) used for packaging up the React code

3. [Docker](https://www.docker.com/get-docker) used to encapsulate application in a predictable environment 

4. (Optional) [Make](https://www.gnu.org/software/make/manual/make.html) contains all the commands for development/release that could be ran with make

## Usage

### Build
Installs dependencies then runs webpack
```
make build
```

### Building a release package
Builds code with optimization then packages it in a docker container
```
make release
```

### Development environment
Builds code then runs docker container at [http://localhost:8080](http://localhost:8080). This also volume maps the dist folder to the docker container so that building the code will update the running container.
```
make dev
```

## Docker Info
Uses base image nginx:alpine and copies the dist folder into the /usr/share/nginx/html folder so the files are statically served.

## TODO
1. Add sample Gherkin cucumber for BDD
2. Add commands to Makefile for testing