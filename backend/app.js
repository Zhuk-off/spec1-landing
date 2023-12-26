// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

const strapi = require("@strapi/strapi");

if (process.env.NODE_ENV == "development")
  strapi({ autoReload: { enabled: true } }).start();
else strapi().start();
