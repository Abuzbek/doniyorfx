import { Router } from "express";
import { PaymentCreateController, PaymentFetchController } from "../controllers/payment.controller.js";
import upload from "../utils/file.js"
const router = Router();

router.get("/payment", PaymentFetchController);
router.post("/payment",upload.single('file'), PaymentCreateController);

export default router;