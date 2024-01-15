import express from "express";
import authController from "../controllers/authController.js";
//import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();


router.post('/users/register', authController.userRegistration);



export default router;