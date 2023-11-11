const loginRouter = require('./login');
const musicRouter = require('./music');
const userRouter = require('./user');


function routerApi(app){
  app.use('/login', loginRouter);
  app.use('/music', musicRouter);
  app.use('/user', userRouter);
}

module.exports = routerApi;
