const express = require('express');
const cors = require("cors");
const  app = express();
const pool = require("./db")

// middleware
app.use(cors());
app.use(express.json());

//routes

//create todo

//get all todos

//get a todo

// update a todo


/delete a todo

app.listen(5000, () => {
	console.log("server has started on port 5000")
})