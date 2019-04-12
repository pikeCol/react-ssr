const express = require("express");
const Router = express.Router();

Router.get('/userInfo', function (req, res) {
  res.json({
    name: 'jlsadjfal',
    age: 123123
  })
})

export default Router; 