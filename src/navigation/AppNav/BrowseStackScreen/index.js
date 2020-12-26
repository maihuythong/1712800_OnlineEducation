import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HeaderRight from "../../../components/shared/HeaderRight";
import * as ScreenName from "../../../global/constants/screenName";
import AuthorDetail from "../../../views/App/AuthorDetail";
import Browse from "../../../views/App/Browse";
import CourseDetail from "../../../views/App/CourseDetail";
import CourseOfSection from "../../../views/App/CourseOfSection";
import CourseOfSkill from "../../../views/App/CourseOfSkill";
import CourseIntro from '../../../views/App/CourseIntro';
const Stack = createStackNavigator();

const BrowseStackScreen = () => {
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
        name={ScreenName.BrowseScreen}
        component={Browse}
        options={{
          title: "Browse",
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
        name={ScreenName.AuthorDetailScreen}
        component={AuthorDetail}
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

      <Stack.Screen
        name={ScreenName.CourseIntroScreen}
        component={CourseIntro}
        options={{
          headerRight: null,
          title: null,
        }}
      />

      <Stack.Screen
        name={ScreenName.CourseOfSkillScreen}
        component={CourseOfSkill}
        options={({ route }) => ({ title: route.params.title })}
        // options={{
        //   headerRight: null,
          
        // }}
      />
    </Stack.Navigator>
  );
};

export default BrowseStackScreen;
