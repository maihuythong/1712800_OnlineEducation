import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenName from '../../../global/constants/screenName';
import Browse from '../../../views/App/Browse';
import HeaderRight from '../../../shared/HeaderRight';
import CourseOfSection from '../../../views/App/CourseOfSection';

const Stack = createStackNavigator();

const BrowseStackScreen = () => {
  return (
    <Stack.Navigator
      headerMode='screen'
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
          title: 'Browse',
          headerTitleAlign: 'left',
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
    </Stack.Navigator>
  );
};

export default BrowseStackScreen;
