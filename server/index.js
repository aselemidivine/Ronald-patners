// IMPORTING LIBRARIES
const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}!`)
});



// {
//   "name": "ronald-patners",
//   "version": "1.0.0",
//   "description": "",
//   "main": "server.js",
//   "scripts": {
//     "start": "node server.js"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/aselemidivine/Ronald-patners.git"
//   },
//   "author": "Aselemi Divine",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/aselemidivine/Ronald-patners/issues"
//   },
//   "homepage": "https://github.com/aselemidivine/Ronald-patners#readme",
//   "dependencies": {
//     "body-parser": "^1.20.2",
//     "cors": "^2.8.5",
//     "express": "^4.18.2",
//     "mongoose": "^7.2.2",
//     "nodemailer": "^6.9.3"
//   }
// }
