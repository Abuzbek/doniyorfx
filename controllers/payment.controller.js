import { Payments } from "../models/payments.model.js";

export const PaymentCreateController = async (req, res) => {
  //   console.log(res);
  console.log(req.file);
  console.log(req.body);
  const file = req.file;
  const payment = new Payments({
    ...req.body,
    file: file ? "/img/" + file.filename : "",
  });
  const currentPayment = await payment.save();
  res.json(currentPayment);
};
export const PaymentFetchController = async (req, res) => {
  const PaymentModel = await Payments.find({});
  res.json(PaymentModel);
};
