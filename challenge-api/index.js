var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var guard = require('express-jwt-permissions')();

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-r06am3cy.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.challenges-api.com',
    issuer: 'https://dev-r06am3cy.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/challenges', guard.check(['read:challenges']), function (req, res) {
    res.json({
        challenges: "This is the first challenge",
        challenges: "This is another challenge",
    }); 
});

app.listen(port);