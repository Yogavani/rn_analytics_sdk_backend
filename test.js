const Analytics = require("./src/index");

// ✅ initialize first
Analytics.init({ apiKey: "test" });


Analytics.track("event_1");
Analytics.track("event_2");
Analytics.track("event_3");

console.log("Events queued... waiting for auto send...");