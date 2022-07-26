// * You may uncomment one of these modules:
const express = require('express');
// const koa = require('koa');
// const hapi = require('@hapi/hapi');
// const restify = require('restify');

//express decalred above is a global variable and can therefore be accessed within the local scope

module.exports = (stepService) => {
  const REST_PORT = 8080;
  const app = express();
  app.get('', )
  // * TODO: Write the GET endpoint, using `stepService` for data access
  // * TODO: Return object containing `close()` method for shutting down the server

};

//pass the extracted url params to the stepService function to update/store new user data