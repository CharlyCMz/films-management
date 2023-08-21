const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { config } = require('./config/config');

const { errorLogger, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlwares/error.handler');

const app = express();

app.use(express.json());

routerApi(app);

//=============================================================================================================
// CORS Section to segment the scope of the API
// include the common Ports for local apps
const withelist = ['http://localhost:3000','http://localhost:4041'];
// Set the options for a succesful/refused connection
const options = {
  origin: (origin, callback) => {
    if (withelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed connection. CORS Refused'));
    }
  }
}
app.use(cors(options));
//==============================================================================================================

//Auth Index Execution
require('./utils/auth');

app.use(errorLogger);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get("/", (req, res) =>{
  res.send("Welcome to Disney Films Manager for BizNation");
});

app.listen(config.port, () =>{
  console.log("App running on port: " + config.port);
});
