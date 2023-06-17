import express from "express";
const router = express.Router();

import { deleteUsers, getData, getDataById, saveUsers, updateUsers } from "./controller.js";

router.get("/", (req, res) => {
  res.json({ message: "Home Pages" });
});

router.get("/users", getData);
router.get("/users/:id", getDataById);
router.post("/users", saveUsers);
router.patch("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

export default router;
