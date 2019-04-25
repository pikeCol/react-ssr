import express from 'express';
import path from 'path';
import React from 'react';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
// import App from './src/main'
import BasicExample from './src/example'
// example
// import routes from './src/routes'
import { StaticRouter } from "react-router";
import userRoute from './server/router'
// import { matchPath } from "react-router-dom";

// inside a request

// use `some` to imitate `<Switch>` behavior of selecting only
// the first to match

const app = express()

app.use('/api', userRoute)

app.use(function (req, res, next) {
  if (req.url.startsWith('/api')) {
    return next()
  }
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <BasicExample />
    </StaticRouter>
  );
  // res.send(html);
  fs.readFile(
    path.join(__dirname, 'dist', 'index.html'),
    'utf8',
    (err, data) => {
      if (err) throw err;
      console.log('enter')
      // Inserts the rendered React HTML into our main div
      const document = data.replace(
        /<div id="app"><\/div>/,
        `<div id="app">${html}</div>`
      );

      // Sends the response back to the client
      res.status(200).send(document);
    }
  );
})

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(9000, function () {
  console.log('server running in http://localhost:9000')
})