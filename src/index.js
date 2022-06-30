//included nodemon in script of package.json to restart the server whenever a change is detected in the codebase 
//command to initialize nodemon: npm run dev 
require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

// /*Includes full driver code example*/
//const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://admin:<password>@cluster0.go56x.mongodb.net/?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // /*perform actions on the collection object*/
  //client.close();
//});

//The following characters must be converted using percent encoding if included in a username or password: : / ? # [ ] @
//For example, if your password in plain-text is p@ssw0rd'9'! you need to encode your password as: p%40ssw0rd%279%27%21
//MONGO_CLUSTER_CREDENTIALS={{username:"admin"},{password:"password@123"}};
//const mongoUri ='mongodb+srv://<ente username here>:<enter password here>@cluster0.go56x.mongodb.net/?retryWrites=true&w=majority'

const mongoUri ='mongodb+srv://admin:password%40123@cluster0.go56x.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error',(err)=> {
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
   res.send(`Your email: ${req.user.email}`); 
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
