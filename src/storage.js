import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "analytics_events";

class Storage {
  async save(events) {
    await AsyncStorage.setItem(KEY, JSON.stringify(events));
  }

  async load() {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  }
}

export default Storage;