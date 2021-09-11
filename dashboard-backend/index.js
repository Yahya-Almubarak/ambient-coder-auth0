var express = require("express");
var cors = require('cors')
var axios = require("axios");
var port = process.env.PORT || 3001;
var oAuth = require("./middleware/oAuth");
var app = express();

const challengesAPIEndpoint = "http://localhost:8080/challenges";

app.use(oAuth)
app.use(cors())

app.get("/challenges", oAuth, async (req, res) => {
    try {
        const { access_token } = req.oauth;

        const response = await axios({
             method: "get", 
             url: challengesAPIEndpoint,
             headers: {Authorization: `Bearer ${access_token}`,
            },
            });
        res.json(response.data);
    } catch (error) {
        console.log(error);
        if(error.response.status === 401) {
            res.status(401).json("Unauthoriced to access data");
        } else if (error.response.status === 403) {
            res.status(403).json("Permission denied");
        } else {
            res.status(500).json("Whoop, something went wrong");
        }
    }
});

app.listen(port, () => console.log("Started"));