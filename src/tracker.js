const { v4: uuidv4 } = require("uuid");
import Queue from "./queue";
import Sender from "./sender";

class Tracker {
  constructor(config = {}) {
    this.sessionId = uuidv4();
    this.queue = new Queue();

    this.apiUrl = config.apiUrl;

    if (!this.apiUrl) {
      console.warn("⚠️ apiUrl is missing in Analytics.init()");
    }

    this.sender = new Sender(this.apiUrl);

    this.flushInterval = config.flushInterval || 5000;

    this.startAutoFlush();
  }

  async track(event, props = {}) {
    const eventData = {
      event,
      properties: props,
      timestamp: Date.now(),
      eventId: uuidv4(),
      sessionId: this.sessionId,
    };

    await this.queue.add(eventData);
  }

  startAutoFlush() {
    setInterval(async () => {
      const events = this.queue.getAll();

      if (events.length === 0) return;

      console.log("Auto sending batch of", events.length);

      const success = await this.sender.send(events);

      if (success) {
        this.queue.clear();
        console.log("Queue cleared after batch send");
      } else {
        console.log("Retrying later... (queue preserved)");
      }
    }, this.flushInterval); // ✅ FIXED HERE
  }
}

export default Tracker;