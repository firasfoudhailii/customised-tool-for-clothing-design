const express = require('express');
const bodyparser = require( 'body-parser');
const mongoose = require( 'mongoose');
const cors = require( 'cors');

require('dotenv')
//import decodeJWT from './auth/decodeJWT';

const contactus = require ("./routes/contactus");
const prototype = require ("./routes/prototype");


const app = express();

//app.use(decodeJWT);

app.use(bodyparser.json({ limit: "100mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

app.use("/contactus", contactus);
//app.use("/dashboard", prototype);
app.use("/prototypes",prototype);
const CONNECTION_URL = 'mongodb+srv://phray:phray123@cluster0.etmzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);