import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import BrowseStackScreen from './BrowseStackScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0c71ac',
        inactiveTintColor: '#d9d9d9',
        style: {
          backgroundColor: '#1f242a',
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
        name='Home'
        component={HomeStackScreen}
        options={{ title: 'Home' }}
      />
      {/* <Tab.Screen
        name="Download"
        component={}
        options={{title: 'Download'}}
      /> */}
      <Tab.Screen
        name='Browse'
        component={BrowseStackScreen}
        options={{ title: 'Browse' }}
      />
      {/* <Tab.Screen
        name='Search'
        component={Search}
        options={{ title: 'Search' }}
      /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
