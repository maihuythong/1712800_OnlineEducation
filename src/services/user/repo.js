/* eslint-disable class-methods-use-this */
import { Api } from "../axiosApi";
import AsyncStorage from "../../utils/storage/asyncStorage";
import { showFlashMessage } from "../../services/app/actions";

const UserRepo = {
  signup: async function ({ name, email, phone, password }) {
    try {
      const data = await Api({
        method: "post",
        url: "/user/register",
        body: {
          name,
          email,
          phone,
          password,
        },
      });
      return data;
    } catch (e) {
      console.log("Error when sign up: " + e);
      throw e;
    }
  },

  signin: async function ({ email, password }) {
    try {
      const data = await Api({
        method: "post",
        url: "/user/login",
        body: {
          email,
          password,
        },
      });
      return data;
    } catch (e) {
      console.log("Error when sign in: " + e);
      throw e;
    }
  },

  getMe: async function () {
    let data = null;
    try {
      data = await Api({
        method: "get",
        url: "/user/me",
      });
      return data;
    } catch (e) {
      console.log("Error when get me: " + e.response);
      throw e;
    }
  },

  sendEmailForgotPassword: async function (email) {
    await Api({
      method: "post",
      url: "/user/forget-pass/send-email",
      body: {
        email,
      },
    });
  },

  updateProfile: async function ({ name, phone, avatar }) {
    try {
      const { payload: userInfo } = await Api({
        method: "put",
        url: "/user/update-profile",
        body: {
          name,
          phone,
          avatar,
        },
      });

      return userInfo;
    } catch (e) {
      console.log("Error when update profile: " + e.response);
      throw e;
    }
  },

  changePassword: async function ({ id, oldPass, newPass }) {
    try {
      const token = await AsyncStorage.getAccessToken();
      const data = await Api({
        method: "post",
        url: "/user/change-password",
        body: {
          token,
          id,
          oldPass,
          newPass,
        },
      });
      return data;
    } catch (e) {
      showFlashMessage({
        description: e?.response?.data?.message ?? "Something went wrong!",
      });
      throw e;
    }
  },

  changeProfile: async function ({ name, phone }) {
    try {
      const token = await AsyncStorage.getAccessToken();
      const { payload: userInfo } = await Api({
        method: "put",
        url: "/user/update-profile",
        body: {
          token,
          name,
          phone,
        },
      });
      return userInfo;
    }catch (e) {
      showFlashMessage({
        description: e?.response?.data?.message ?? "Something went wrong!",
      });
      throw e;
    }
  },
};

export default UserRepo;
