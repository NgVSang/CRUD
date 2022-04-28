const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	gender: {
		type: String,
	},
	status: {
		type: String,
	},
});

const Userdb = mongoose.model("userdb", userSchema);

module.exports = Userdb;
