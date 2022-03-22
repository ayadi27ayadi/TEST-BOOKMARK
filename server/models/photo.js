const mongoose = require("mongoose");

const  PhotoSchema = new mongoose.Schema(
	{
    lenght: { type: Number },
    height: { type: Number },
		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Photo", PhotoSchema);