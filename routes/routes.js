import express from "express";
import { getTodos,userTodos,simpleGreet } from "../controllers/userControllers.js";

const router=express.Router();

router.route("/").get(simpleGreet);
router.route("/todos").get(getTodos);
router.route("/user/:id").get(userTodos);

export default router;