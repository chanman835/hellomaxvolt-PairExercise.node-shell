let request = require("request");

// request("http://www.google.com", function (error, response, body) {
//   console.error("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
// });

module.exports = function (url) {
  process.stdout.write(
    request(url, function (error, response, body) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
    })
  );
  process.stdout.write("\nprompt > ");
};
