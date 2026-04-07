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
```

---

## 🚀 Quick Start

```js
import Analytics from "rn-analytics-sdk";

// Initialize SDK
Analytics.init({
  apiKey: "your_api_key",
  flushInterval: 5000, // optional
});

// Track events
Analytics.track("app_opened");

Analytics.track("button_clicked", {
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
Analytics.init({
  apiKey: "your_api_key",
  flushInterval: 5000,
});
```

---

### 🔹 `track(eventName, properties?)`

Track an event.

```js
Analytics.track("purchase", {
  amount: 100,
  currency: "USD",
});
```

---

## ⚙️ Configuration Options

| Option        | Type   | Description              |
| ------------- | ------ | ------------------------ |
| apiKey        | string | Your API key             |
| flushInterval | number | Batch send interval (ms) |

---

## 🛠️ Example

```js
Analytics.init({ apiKey: "test" });

Analytics.track("screen_view", {
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
