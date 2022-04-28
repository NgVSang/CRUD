const express = require("express");
const router = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

router.get("/", services.homeRoutes);

router.get("/add-user", services.add_user);

router.get("/update-user/:id", services.update_user);

//API
router.post("/api/users", controller.create);
router.get("/api/users", controller.getAllUser);
router.get("/api/users/:id", controller.getUserByID);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);

module.exports = router;
