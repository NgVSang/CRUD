var Userdb = require("../model/model");
// const services = require("../services/render");

exports.create = (req, res) => {
	if (!req.body) {
		res.status(400).send({ message: "content can not be empty" });
		res.render("err-page", { message: "content can not be empty" });
	}
	const user = new Userdb({
		name: req.body.name,
		email: req.body.email,
		gender: req.body.gender,
		status: req.body.status,
	});
	console.log(user);
	user
		.save(user)
		.then((data) => {
			// res.send(data);
			res.redirect("/");
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "some another error" });
			res.render("err-page", { message: err.message || "some another error" });
		});
};

exports.getAllUser = (req, res) => {
	Userdb.find()
		.then((user) => {
			res.send(user);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "some another error" });
			res.render("err-page", { message: err.message || "some another error" });
		});
};

exports.getUserByID = (req, res) => {
	Userdb.findById(req.params.id)
		.then((user) => {
			res.send(user);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "some another error" });
			res.render("err-page", { message: err.message || "some another error" });
		});
};

exports.update = (req, res) => {
	if (!req.body) {
		res.status(400).send({ message: "Data to update can not empty" });
		res.render("err-page", { message: `can not delete user with ${id}` });
	}

	const id = req.params.id;
	Userdb.findByIdAndUpdate(id, { $set: req.body }, { new: true })
		.then((data) => {
			console.log(data);
			if (!data) {
				res.status(404).send({ message: `can not update user with ${id}` });
				res.render("err-page", { message: `can not delete user with ${id}` });
			} else {
				// res.send(data);
				res.redirect("/");
			}
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "some another error" });
			res.render("err-page", { message: `can not delete user with ${id}` });
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	Userdb.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res.status(404).send({ message: `can not delete user with ${id}` });
				res.render("err-page", { message: `can not delete user with ${id}` });
				// services.err_page;
			} else {
				res.redirect("/");
			}
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "some another error" });
			res.render("err-page", { message: err.message || "some another error" });
			// services.err_page;
		});
};
