const KEY = "analytics_events";
let warnedMissingAsyncStorage = false;

function getAsyncStorage() {
  try {
    return require("@react-native-async-storage/async-storage").default;
  } catch (err) {
    if (!warnedMissingAsyncStorage) {
      warnedMissingAsyncStorage = true;
      console.warn(
        "Analytics SDK: @react-native-async-storage/async-storage is not installed. Events will not persist across app restarts."
      );
    }

    return null;
  }
}

class Storage {
  async save(events) {
    const AsyncStorage = getAsyncStorage();

    if (!AsyncStorage) return;

    await AsyncStorage.setItem(KEY, JSON.stringify(events));
  }

  async load() {
    const AsyncStorage = getAsyncStorage();

    if (!AsyncStorage) return [];

    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  }
}

export default Storage;
