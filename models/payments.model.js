import mongoose, { Schema } from "mongoose";
export const paymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  course: {
    type: Number,
    required: true,
  },
  plan: {
    type: Number,
    required: true,
  },
  file: {
    type: String,
    required: true,
  }
});

export const Payments = mongoose.model("Payments", paymentSchema);