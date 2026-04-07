import axios from "axios";

class Sender {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async send(events) {
    try {
      console.log("Sending events to server...");

      const response = await axios.post(
        this.apiUrl,
        { events }
      );

      console.log("Sent successfully:", response.status);
      return true;
    } catch (err) {
      console.log("Send failed:", err.message);
      return false;
    }
  }
}

export default Sender;