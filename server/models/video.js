const mongoose = require("mongoose");

const  VideoSchema = new mongoose.Schema(
	{
    lenght: { type: String },
    height: { type: String },
    duration: { type: String },
		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);