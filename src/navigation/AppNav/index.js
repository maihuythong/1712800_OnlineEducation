import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackScreen";
import BrowseStackScreen from "./BrowseStackScreen";
import SearchStackScreen from "./SearchStackScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CategoryStackScreen from "./CategoryStackScreen";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { t } = useTranslation("tab_navigator", { useSuspense: false });

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#0c71ac",
        inactiveTintColor: "#d9d9d9",
        style: {
          backgroundColor: "#1f242a",
        },
        labelStyle: {
          fontSize: 16,
        },
      }}
      navigationOptions={{
        header: {
          visible: true,
        },
      }}
    >
      <Tab.Screen
        name={t("home")}
        component={HomeStackScreen}
        options={{
          // title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#009dc4"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={t("download")}
        component={CategoryStackScreen}
        options={{
          title: t("download"),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="certificate"
              color={"#009dc4"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t("browse")}
        component={BrowseStackScreen}
        options={{
          title: t("browse"),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder" color={"#009dc4"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={t("search")}
        component={SearchStackScreen}
        options={{
          title: t("search"),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="magnify"
              color={"#009dc4"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
