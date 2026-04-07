const { v4: uuidv4 } = require("uuid");
const Queue = require("./queue");
const Sender = require("./sender");

class Tracker {
    constructor(config = {}) {
        this.sessionId = uuidv4();
        this.queue = new Queue();
        this.sender = new Sender();
      
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
    }, 5000);
  }
}

module.exports = Tracker;