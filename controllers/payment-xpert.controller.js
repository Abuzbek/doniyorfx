import { PaymentXperts } from "../models/payment-xpert.model.js";
import { CreateCsvService } from "../services/csv-xpert.service.js";

export const PaymentCreateController = async (req, res) => {
  //   console.log(res);
  // console.log(req.file);
  // console.log(res);
  console.log(req.body);
  // const file = req.file;
  const payment = new PaymentXperts({
    ...req.body,
    course: "1",
    // file: file ? "/images/" + file.filename : "",
  });
  const currentPayment = await payment.save();
  res.json(currentPayment);
};
export const PaymentFetchController = async (req, res) => {
  const PaymentModel = await PaymentXperts.find({});
  res.json(PaymentModel);
};
export const PaymentUpdateController = async (req, res) => {
  const file = req.file;
  const data = {
    file: file ? "/images/" + file.filename : "",
  };
  PaymentXperts.updateOne({ _id: req.params.id }, { $set: data })
    .then((_data) => {
      res.json(_data);
    })
    .catch((err) => {
      console.log("Error is: " + err);
    });
};

export const PaymentCSVDownloader = async (req, res) => {
  const PaymentModel = await PaymentXperts.find({}).sort({ createdAt: "desc" });
  await CreateCsvService(PaymentModel, res);
};
