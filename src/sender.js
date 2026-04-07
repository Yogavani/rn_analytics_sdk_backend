const axios = require("axios");

class Sender {
  async send(events) {
    try {
      console.log("Sending events to server...");

      const response = await axios.post(
        "http://localhost:3000/events",
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

module.exports = Sender;