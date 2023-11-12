import { IFormTypes } from "../payment/page";
import http from "./axios.config";

export class PaymentService {
  static async createPayment(data: IFormTypes) {
    return await http.post("payment", data);
  }
  static async updatePayment(id:string, data: FormData) {
    return await http.patch("payment/"+id, data);
  }
}
