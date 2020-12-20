import AsyncStorageComp from "@react-native-community/async-storage";

export const ASYNC_STORAGE_CONSTANTS = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
};

const AsyncStorage = {
  getAccessToken: async function () {
    try {
      const token = await AsyncStorageComp.getItem(
        ASYNC_STORAGE_CONSTANTS.ACCESS_TOKEN
      );
      return token;
    } catch (e) {
      console.log("Error getAccessToken " + e);
      return null;
    }
  },

  setAccessToken: async function (token) {
    try {
      await AsyncStorageComp.setItem(
        ASYNC_STORAGE_CONSTANTS.ACCESS_TOKEN,
        token
      );
      return true;
    } catch (e) {
      console.log("Error setAccessToken " + e);
      return false;
    }
  },

  removeAccessToken: async function () {
    try {
      await AsyncStorageComp.removeItem(ASYNC_STORAGE_CONSTANTS.ACCESS_TOKEN);
      return true;
    } catch (e) {
      console.log("Error removeAccessToken " + e);
      return false;
    }
  },
};

export default AsyncStorage;
