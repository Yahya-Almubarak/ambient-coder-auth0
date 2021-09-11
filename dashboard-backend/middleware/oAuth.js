var axios = require("axios");

const tokenEndpoint = "https://dev-r06am3cy.us.auth0.com/oauth/token";

const oAuth = (req, res, next) => {
    var code = req.query.code;

    if (!code) {
        res.status(401).send("Missing authorization code");
    }

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", "cqXHSSvOpmKkQXVVdW2ZhMlhGe70jJgJ");
    params.append("client_secret", "Y5QpY41Q-43eWAkGGNuuz_eDiukDszZ_muqGPu5SfAKinlLm9DkD9VUsi2_bjOaH");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/challenges");

    axios.post(tokenEndpoint, params)
    .then(response => {
        req.oauth = response.data;
        next();
    })
    .catch(err => {
        console.log(err);
        res.status(403).json(`Reason: ${err.message}`);
    })
}

module.exports = oAuth;