const express = require('express');
const routerApi = require('./routes');

const { config } = require('./config/config');

const { errorLogger, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlwares/error.handler');

const app = express();

app.use(express.json());

app.use(errorLogger);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

routerApi(app);

app.get("/", (req, res) =>{
  res.send("Welcome to Disney Films Manager for BizNation");
});

app.listen(config.port, () =>{
  console.log("App running on port: " + config.port);
});
