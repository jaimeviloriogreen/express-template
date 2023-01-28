import express from "express";
import { home, contact, services } from "../controllers/mainController.js";
const router = express.Router();

router.get("/", home);
router.get("/contact", contact);
router.get("/services", services);


export default router;