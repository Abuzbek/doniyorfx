import http from "./axios.config";

export class PaymentService {
  static async createPayment(data: FormData) {
    return await http.post("payment", data);
  }
}
