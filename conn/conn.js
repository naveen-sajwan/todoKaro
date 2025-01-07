const mongoose = require("mongoose");

const conn = async(req,res) => {
	try{
		await mongoose
		.connect("mongodb+srv://naveensajwan724:4usWwDUz2ROIZ0eD@cluster0.5kzjg.mongodb.net/")
		.then(()=>console.log("Database Connected"));
	}catch(error){
		console.log(error);
	}
}
conn();