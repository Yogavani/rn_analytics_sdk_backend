import Storage from "./storage";

class Queue {
  constructor() {
    this.storage = new Storage();
    this.events = [];
    this.initialized = false;

    this.init();
  }

  async init() {
    this.events = await this.storage.load();
    this.initialized = true;
  }

  async add(event) {
    if (!this.initialized) {
      await this.init(); // ✅ ensure ready
    }

    this.events.push(event);
    await this.storage.save(this.events);

    console.log("Event saved:", event);
  }

  getAll() {
    return this.events;
  }

  async clear() {
    this.events = [];
    await this.storage.save(this.events);
  }
}

export default Queue;