# Palettee-api
## Build Instructions

* Clone [palettee-api](https://github.com/palettee25/palettee-api) inside your main workspace dir, eg `~/palettee-workspace`
* Install `nvm` following instructions from this [url](https://github.com/creationix/nvm#installation-and-update)
* Install this specific version of `nodejs` using `nvm` : `nvm install v16`
* Check `nodejs` version by typing : `node -v`
* If multiple versions are installed use the correct version : `nvm use v18.12.1`
* Remove `node_modules` folders if exist in the `palettee-api` directory
* Install dependencies : `npm i`
* Install eslint for quick fixing of clean code rules: `npm install -g eslint`
* Run the below command to server in development mode.

  `palettee-api: $ npm run serve`

* Run the below command for the production mode.

  `palettee-api: $ npm run build`

