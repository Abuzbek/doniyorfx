// api/registered

import http from "./axios.config";

export class RegisteredService {
  static async create(data: { name: string; phone: string }) {
    return await http.post("registered", data);
  }
}
