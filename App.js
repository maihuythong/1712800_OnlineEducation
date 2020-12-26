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
import { LogBox } from 'react-native';
console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']);

export default function App() {
  useEffect(() => {
    return () => {
      AxiosInstance.interceptors.request.eject(requestInterceptor);
      AxiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <FlashMessage />
        <RootAppNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f1014',
    // marginTop: 15,
  },
});
