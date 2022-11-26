const express = require("express");
const morgan = require('morgan');
const cors = require('cors'); //avoid cors error
const cookieParser = require('cookie-parser')

const router = require('./router')
const app = express();
require("dotenv").config();
require('./controller/DatabaseController').connect(process.env.MONGODB_URI)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cookieParser middleware
app.use(cookieParser())

const PORT = process.env.PORT || 3001;

app.use(morgan('combined'));
app.use(cors());  //avoid "cors" error
app.use("/api",router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});