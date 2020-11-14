import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenName from '../../../global/constants/screenName';
import Home from '../../../views/App/Home';
import HeaderRight from '../../../shared/HeaderRight';
import CourseOfSection from '../../../views/App/CourseOfSection';
import CourseDetail from '../../../views/App/CourseDetail';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#0f1014',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
  };

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
        name={ScreenName.HomeScreen}
        component={Home}
        options={{
          title: 'Home',
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
