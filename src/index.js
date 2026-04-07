import Tracker from "./tracker";

class Analytics {
  constructor() {
    this.tracker = null;
  }

  init(config = {}) {
    const normalizedConfig = {
      ...config,
      apiUrl: config.apiUrl || config.apiKey,
    };

    if (!normalizedConfig.apiUrl) {
      console.warn("⚠️ Analytics: apiUrl (or apiKey alias) is required in init()");
    }

    console.log("✅ Analytics initialized");

    this.tracker = new Tracker(normalizedConfig);
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
