import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HeaderRight from "../../../components/shared/HeaderRight";
import * as ScreenName from "../../../global/constants/screenName";
import CourseDetail from "../../../views/App/CourseDetail";
import CourseOfSection from "../../../views/App/CourseOfSection";
import Home from "../../../views/App/Home";

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: "#0f1014",
    },
    headerTintColor: "white",
    headerTitleAlign: "center",
  };

  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={({ navigation }) => ({
        headerRight: (props) => {
          return <HeaderRight navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen
        name={ScreenName.HomeScreen}
        component={Home}
        options={{
          title: "Home",
          headerTitleAlign: "left",
          headerLeft: null,
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name={ScreenName.CourseListScreen}
        component={CourseOfSection}
        options={{
          headerRight: null,
          title: null,
        }}
      />

      <Stack.Screen
        name={ScreenName.CourseDetailScreen}
        component={CourseDetail}
        options={{
          headerRight: null,
          title: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
