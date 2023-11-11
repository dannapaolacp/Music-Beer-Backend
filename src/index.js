const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const routerApi = require("./routes")
const {logErrors, errorHandler} = require('./middlewares/errorHandler')

const app = express();


//Settings
app.set('port', process.env.PORT || 3001);



//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(logErrors);
app.use(errorHandler);

//Routes
routerApi(app);

//List function to wake up the server

app.listen(app.get('port'), () => {
    console.log('Servidor is listening ' + app.get('port'));
})
