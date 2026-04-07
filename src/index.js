const Tracker = require("./tracker");

class Analytics {
  constructor() {
    this.tracker = null;
  }

  init(config = {}) {
    this.tracker = new Tracker(config);
  }

  track(event, props = {}) {
    if (!this.tracker) {
      console.warn("Analytics not initialized!");
      return;
    }

    this.tracker.track(event, props);
  }
}

module.exports = new Analytics();