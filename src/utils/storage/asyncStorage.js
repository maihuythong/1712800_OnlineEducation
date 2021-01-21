import AsyncStorageComp from "@react-native-community/async-storage";

export const ASYNC_STORAGE_CONSTANTS = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  LANGUAGE: "LANGUAGE",
  COURSES: "COURSES",
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

  getLanguage: async function() {
    try {
      const language = await AsyncStorageComp.getItem(ASYNC_STORAGE_CONSTANTS.LANGUAGE);
      return language;
    } catch (e) {
      console.log('Error when get language ' + e);
      return null;
    }
  },

  setLanguage:  async function(language) {
    try {
      await AsyncStorageComp.setItem(ASYNC_STORAGE_CONSTANTS.LANGUAGE, language);
      return true;
    } catch (e) {
      console.log('Error when get language ' + e);
      return false;
    }
  },

  getCourseDownloaded: async function() {
    try {
      const data = await AsyncStorageComp.getItem(ASYNC_STORAGE_CONSTANTS.COURSES);
      return data;
    }catch (e) {
      console.log('Error when get course ' + e);
      return false;
    }
  },

  addNewCourseDownloaded: async function (courseId) {
    try {
      const oldData = (await this.getCourseDownloaded() || null);
      console.log(oldData);
      let newData = JSON.parse(oldData??null);
      if(newData === null) newData = [];
      console.log(newData);
      newData.push(courseId);
      await AsyncStorageComp.setItem(ASYNC_STORAGE_CONSTANTS.COURSES, JSON.stringify(newData));
      console.log('====================================new');
      console.log(newData);
      return true;
    }catch (e) {
      console.log('Error when get course ' + e);
      return false;
    }
  }
  
};

export default AsyncStorage;
