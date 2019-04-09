import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const app = express();
function Home () {
  return (
    <h3>hello 我的填</h3>
  )
}
app.get('/', function (req, res) {
  // console.log()

  res.send(ReactDOMServer.renderToString(<Home />))
})

app.listen(9000, function () {
  console.log('server running in http://localhost:9000')
})