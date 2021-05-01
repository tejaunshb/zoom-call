var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: 8001,
    path: '/',
    secure : false
});
