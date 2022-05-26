const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const router = require('./router')
const path = require('path')

const app = express()

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// setting up cors, headers
app.use(cors());

//connect to mongodb
mongoose.connect(process.env.MONGODB_ATLAS_URI,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    }
);
// For production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.resolve(__dirname, "./client/dist")));

  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
  });
}



// port
const port = process.env.PORT || 8080;

app.use(router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});