import React, { useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import FlashMessage from "./src/components/shared/FlashMessage";
import RootAppNavigation from "./src/navigation";
import store from "./src/redux/store";
import { AxiosInstance } from "./src/services/axiosApi";
import {
  requestInterceptor,
  responseInterceptor,
} from "./src/services/axiosApi/axios.config";
import { LogBox } from "react-native";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n/i18n";

console.disableYellowBox = true;
LogBox.ignoreLogs(["Warning: ..."]);

export default function App() {
  useEffect(() => {
    return () => {
      AxiosInstance.interceptors.request.eject(requestInterceptor);
      AxiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={false} />
          <FlashMessage />
          <RootAppNavigation />
        </SafeAreaView>
      </Provider>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f1014',
    // marginTop: 15,
  },
});
