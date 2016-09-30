# ng2-horizon-starter
A starter project for Angular 2 + Webpack + Horizon + RethinkDB

## W.I.P.

### Installation
* If you do not have RethinkDB, please follow instructions here, https://rethinkdb.com/docs/install/
* If you do not have Horizon, please follow instructions here, http://horizon.io/install/

``` bash
$ git clone https://github.com/bytecodedan/ng2-horizon-starter.git
$ cd ng2-horizon-starter
$ npm i # install Node dependecies
$ npm run postinstall # install TypeScript definitions
```

### Run
``` bash
$ npm run build # manually build the client 
$ npm run build-prod # manually build the client for production 
$ npm run dev # start server in dev mode (localhost:8181)
$ npm run serve # simultaniously starts server in dev mode and launches webpack-dev-server (live reload on localhost:8282)
```

### Credits and inspiration
* [lovli.js](https://github.com/flipace/lovli.js)
* 