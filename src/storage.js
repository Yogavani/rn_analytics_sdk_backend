// import AsyncStorage from "@react-native-async-storage/async-storage";

// const KEY = "analytics_events";

// class Storage {
//   async save(events) {
//     await AsyncStorage.setItem(KEY, JSON.stringify(events));
//   }

//   async load() {
//     const data = await AsyncStorage.getItem(KEY);
//     return data ? JSON.parse(data) : [];
//   }
// }

// export default Storage;

const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "events.json");

class Storage {
  save(events) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(events, null, 2));
  }

  load() {
    if (!fs.existsSync(FILE_PATH)) {
      return [];
    }

    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data);
  }
}

module.exports = Storage;