# 🚀 RN Analytics SDK

A lightweight, customizable analytics SDK for React Native apps.

---

## ✨ Features

* 📊 Event tracking (`track`)
* 🔄 Offline queue support
* 📦 Batch event sending
* 🔁 Retry mechanism on failure
* ⏱️ Auto flush system
* 📱 App lifecycle tracking

---

## 📦 Installation

```bash
npm install rn-analytics-sdk
npm install @react-native-async-storage/async-storage react-native-get-random-values
```

---

## ✅ Required Peer Dependencies

`rn-analytics-sdk` expects the host app to install:

* `@react-native-async-storage/async-storage`
* `react-native-get-random-values`

These are peer dependencies to prevent duplicate native modules and autolinking conflicts.
The SDK imports `react-native-get-random-values` internally to support `uuid` on React Native.

---

## 🚀 Quick Start

```js
import Analytics from "rn-analytics-sdk";

const analytics = new Analytics();

// Initialize SDK
analytics.init({
  apiUrl: "https://your-api/events",
  flushInterval: 5000, // optional
});

// Track events
analytics.track("app_opened");

analytics.track("button_clicked", {
  buttonName: "Login",
});
```

---

## 🧠 How It Works

1. Events are captured using `track()`
2. Stored locally (offline support)
3. Sent in batches to server
4. Automatically retries on failure

---

## 📘 API Reference

### 🔹 `init(config)`

Initialize the SDK.

```js
const analytics = new Analytics();

analytics.init({
  apiUrl: "https://your-api/events",
  flushInterval: 5000,
});
```

---

### 🔹 `track(eventName, properties?)`

Track an event.

```js
const analytics = new Analytics();

analytics.track("purchase", {
  amount: 100,
  currency: "USD",
});
```

---

## ⚙️ Configuration Options

| Option        | Type   | Description              |
| ------------- | ------ | ------------------------ |
| apiUrl        | string | Your events endpoint URL |
| flushInterval | number | Batch send interval (ms) |

---

## 🛠️ Example

```js
const analytics = new Analytics();

analytics.init({ apiUrl: "https://example.com/events" });

analytics.track("screen_view", {
  screen: "Home",
});
```

---

## 🚧 Roadmap

* [ ] User ID tracking
* [ ] Screen tracking (React Navigation)
* [ ] Performance monitoring
* [ ] Dashboard integration

---

## 🤝 Contributing

Pull requests are welcome!

---

## 📄 License

ISC
