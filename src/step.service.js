// * TODO: Implement function for updating user's step data in store
// * TODO: Function for getting user's step data may need some adjustments
module.exports = function stepService(store) {
  const service = {};
  //update user step data in store use service.get() to get username from store 
  service.get = (username) => store[username];

  service.add = (username, ts, newSteps) => {
    // Assume that `store` is initially an empty object {}. An example `store` is:
    // {
    //   jenna: {
    //     ts: 1503256778463,
    //     cumulativeSteps: 12323,
    //   },
    //   james: {
    //     ts: 1503256824767,
    //     cumulativeSteps: 587,
    //   },
    // }

  };

  return service;
};

//verify if exsiting user exists using the username param (via object.keys and then array destructure and then use an if statement to check if a username is a property of the array)
//if existing user, get username and add newSteps to cumulativeSteps which will now represent the new value for cumulativeSteps
//use service.add to add data to the store object. (the code for service.add is incomplete, the final result in store should be the object commented out inside the service.add function)
