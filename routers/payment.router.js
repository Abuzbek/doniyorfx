import { Router } from "express";
import {
  PaymentCSVDownloader,
  PaymentCreateController,
  PaymentFetchController,
  PaymentUpdateController,
} from "../controllers/payment.controller.js";
import upload from "../utils/file.js";
const router = Router();

router.get("/payment", PaymentFetchController);
router.get("/payment/csv", PaymentCSVDownloader);
router.post("/payment", PaymentCreateController);
router.patch("/payment/:id", upload.single("file"), PaymentUpdateController);
export default router;
