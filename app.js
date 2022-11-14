const express = require ('express');
const app = express();
const userRouter = require('./router/user-router')

app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
    next(`Can't find ${req.originalUrl} on this server!`, 404);
});
  
module.exports = app;   