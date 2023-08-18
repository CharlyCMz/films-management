const express = require('express');
const routerApi = require('./routes/index');

const { errorLogger, errorHandler, boomErrorHandler } = require('./middlwares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(errorLogger);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get("/", (req, res) =>{
  res.send("Welcome to Disney Films Manager for BizNation");
});

app.listen(port, () =>{
  console.log("App running on port: " + port);
});
