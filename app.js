const express = require("express");
const app = express();
const cors = require("cors")
const PORT = 2000;
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth.js");
const list = require("./routes/list.js");
app.use(express.json());
app.use(cors());
app.use("/api/v1",auth);
app.use("/api/v2",list);


app.get("/", (req, res) => { 
	app.use(express.static(path.resolve(__dirname, "my-app", "build"))); 
	res.sendFile(path.resolve(__dirname, "my-app", "build", "index.html"));
});

app.listen(PORT,()=>{
	console.log("Server is successfully running");
});


