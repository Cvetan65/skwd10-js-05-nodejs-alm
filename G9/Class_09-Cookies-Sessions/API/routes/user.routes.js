const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const userController = new UserController();
const cookieValidator = require("../const/cookieValidator.const");

router.get("/:id?", cookieValidator, (req, res) => {
  if (req.params && req.params.id) {
    res.status(200).json({
      message: "You found a user!",
    });
  } else {
    userController.getUsers().then((users) => {
      res.status(200).json(users);
    });
  }
});

module.exports = router;