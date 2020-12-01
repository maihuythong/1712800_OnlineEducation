import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenName from '../../../global/constants/screenName';
import Home from '../../../views/App/Home';
import HeaderRight from '../../../shared/HeaderRight';
import CourseOfSection from '../../../views/App/CourseOfSection';
import CourseDetail from '../../../views/App/CourseDetail';
import SearchHeader from '../../../components/SearchHeader';
import Recent from '../../../components/Search/Recent';
import Search from '../../../views/App/Search';
import SearchResult from '../../../components/Search/SearchResult';

const Stack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <Stack.Navigator headerMode='screen'>
      <Stack.Screen
        name={ScreenName.SearchRecentScreen}
        component={Search}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ScreenName.SearchResultScreen}
        component={SearchResult}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};

export default SearchStackScreen;
