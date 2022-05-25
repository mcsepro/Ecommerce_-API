const router = require("express").Router();
import userController from ("../controllers/userController");

router.post("/", userController.signUp);

router.post("/login", userController.logIn);

router.patch('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

router.get("/data", verifyUser, userController.data);

module.exports = router;
