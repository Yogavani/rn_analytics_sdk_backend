import Tracker from "./tracker";

class Analytics {
  constructor() {
    this.tracker = null;
  }

  init(config = {}) {
    if (!config.apiUrl) {
      console.warn("⚠️ Analytics: apiUrl is required in init()");
    }

    console.log("✅ Analytics initialized");

    this.tracker = new Tracker(config);
  }

  track(event, props = {}) {
    if (!this.tracker) {
      console.warn("⚠️ Analytics not initialized!");
      return;
    }

    this.tracker.track(event, props);
  }
}

export default Analytics;
