const Storage = require("./storage");

class Queue {
  constructor() {
    this.storage = new Storage();
    this.events = [];
    this.init();
  }

  async init() {
    this.events = await this.storage.load();
  }

  async add(event) {
    this.events.push(event);
    await this.storage.save(this.events);

    console.log("Event saved (RN):", event);
  }

  getAll() {
    return this.events;
  }

  async clear() {
    this.events = [];
    await this.storage.save(this.events);
  }
}

module.exports = Queue