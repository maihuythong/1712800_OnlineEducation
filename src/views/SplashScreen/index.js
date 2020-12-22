import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ScreenName from "../../global/constants/screenName";
import { getLoggedAccount } from "../../services/app/getHelper";
import { APP_BOOT } from "../../services/user/constants";

const SplashScreen = ({ navigation }) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const dispatch = useDispatch();

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count === 2) {
        dispatch({
          type: APP_BOOT,
          meta: {
            afterSuccess: () => {
              if (loggedAccount) {
                navigation.replace(ScreenName.AppNavigatorScreen);
              } else {
                navigation.replace(ScreenName.SignInScreen);
              }
            },
            afterFail: () => {
              dispatch(
                showFlashMessage({
                  description: "Something went wrong!",
                })
              );
              navigation.replace(ScreenName.SignInScreen);
            },
          },
        });
      } else {
        count++;
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  return (
    <View>
      <Image
        source={require("./loading.gif")}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  gif: {
    flex: 1,
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
