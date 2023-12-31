const http = require("http");
const app = require("./app/app");
require("colors");
require("dotenv").config();

// port
const port = process.env.PORT || 5000;
// initialize server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server has started and listening on port ${port}`.green.bold);
});
