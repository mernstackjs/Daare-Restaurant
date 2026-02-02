import { Router } from "express";

const router = Router();

import menuRouter from "./api/menu.js";
router.use("/menu", menuRouter);

export default router;
