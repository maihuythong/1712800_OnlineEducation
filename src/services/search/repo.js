import AsyncStorage from "../../utils/storage//asyncStorage";
import { Api } from "../axiosApi";

const SearchRepo = {
  searchCourse: async function (body) {
    try {
      const token = await AsyncStorage.getAccessToken();
      const { keyword = "", limit = 15, offset = 1, opt = {} } = body;
      const { payload: { courses, instructors } = {} } = await Api({
        method: "post",
        url: "/course/searchV2",
        body: {
          token,
          keyword,
          limit,
          offset,
          opt,
        },
      });

      return { courses, instructors };
    } catch (e) {
      console.log("Error when search", e);
      throw e;
    }
  },

  getSearchHistory: async function () {
    try {
      const { payload: histories } = await Api({
        method: "get",
        url: "/course/search-history",
      });
      if (histories?.data) {
        histories.data = await histories?.data.filter(
          (el) => el.content.trim() !== "" && el.content.trim() !== "string"
        );
      }

      return histories?.data || [];
    } catch (e) {
      console.log("Error when get search history " + e);
      throw e;
    }
  },

  clearOneHistory: async function (historyId) {
    try {
      await Api({
        method: "delete",
        url: `/course/delete-search-history/${historyId}`,
      });
    } catch (e) {
      console.log("Error when remove history " + e);
      throw e;
    }
  },

  clearSearchHistory: async function (history) {
    try {
      history?.map((el) => {
        SearchRepo.clearOneHistory(el.id);
      });
    } catch (e) {
      console.log("Error when remove list history " + e);
    } finally {
      return true;
    }
  },
};

export default SearchRepo;
