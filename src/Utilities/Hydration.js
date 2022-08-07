import { Request } from "./Request";
import { BASE_URL } from "../constants/index";

class FinReport {
  GetStats(url) {
    return Request(`${BASE_URL}${url}`, true, "GET")
      .then((response) => {
        if (response.statusCode === 200) {
          return { success: true, message: response, data: response.data };
        }
        return { success: false, message: response.message };
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new FinReport();
