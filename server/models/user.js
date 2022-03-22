const mongoose = require("mongoose");

const  UserSchema = new mongoose.Schema(
	{
    lastName: { type: String },
    firstName: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: Number },
		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);