const StepService = require('./step.service');
const restAPI = require('./rest-api');
const wsServerAPI = require('./wsServer-api');

module.exports = class StepTracker {
  constructor(store) {
    if (store) {
      this.store = store;
    } else {
      this.store = {};
    }

    const stepService = StepService(this.store);

    // Start serving the REST API
    restAPI(stepService);

    // Start serving the WebSocket API
    wsServerAPI(stepService);
  }
};

//this program stores the data by passing this.store as a param(empty object) to the stepService function,
//serves the rest api via passing the data extracted from the get params to the stepService 