import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import BrowseStackScreen from './BrowseStackScreen';
import SearchStackScreen from './SearchStackScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryStackScreen from './CategoryStackScreen';

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
        options={{
          // title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={'#009dc4'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Category'
        component={CategoryStackScreen}
        options={{
          title: 'Category',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='certificate'
              color={'#009dc4'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Browse'
        component={BrowseStackScreen}
        options={{
          title: 'Browse',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='folder' color={'#009dc4'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchStackScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='magnify'
              color={'#009dc4'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
