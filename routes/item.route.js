import { Router } from "express";
import { getAll, getItemAndPrice, getPrice } from "../controllers/item.controller.js";
const router = Router();

router.get("/", getAll);
router.post("/cal", getPrice);
router.get("/demo-promise", getItemAndPrice);

export default router;
