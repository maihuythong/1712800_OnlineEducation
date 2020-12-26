import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SearchResult from "../../../components/Search/SearchResult";
import * as ScreenName from "../../../global/constants/screenName";
import AuthorDetail from "../../../views/App/AuthorDetail";
import CourseIntro from "../../../views/App/CourseIntro";
import Search from "../../../views/App/Search";

const Stack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name={ScreenName.SearchRecentScreen}
        component={Search}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ScreenName.SearchResultScreen}
        component={SearchResult}
        options={{ title: "" }}
      />

      <Stack.Screen
        name={ScreenName.AuthorDetailScreen}
        component={AuthorDetail}
        options={{
          headerRight: null,
          title: null,
        }}
      />

      <Stack.Screen
        name={ScreenName.CourseIntroScreen}
        component={CourseIntro}
        options={{
          headerRight: null,
          title: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStackScreen;
