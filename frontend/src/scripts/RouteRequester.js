import axios from "axios";

export default class RouteRequester {
  getRoute(origin, destination, type) {
    // Initialize the parameters to pass in
    var parameters = {};

    // Switch on if this is an address or coordinates
    switch (type) {
      case "Address":
        parameters = {
          type: "Address",
          origin: origin,
          destination: destination
        };
        break;

      case "Coordinates":
        break;

      default:
    }

    console.log(parameters);

    var promise = new Promise(function(resolve, reject) {
      // Send an axios GET request to the server
      axios
        .get("http://localhost:3001/route", {
          headers: {
            "Content-Type": "application/json"
          },
          params: parameters
        })
        .then(response => {
          // Decode and send the response
          resolve(response.data);
        })
        .catch(error => {
          console.log(
            "ERROR: Unable to get response from the server\n User input may be formatted incorrectly" +
              error.response
          );
          reject(error);
        });
    });

    return promise;
  }
}