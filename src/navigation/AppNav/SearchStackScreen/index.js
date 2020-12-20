import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SearchResult from '../../../components/Search/SearchResult';
import * as ScreenName from '../../../global/constants/screenName';
import Search from '../../../views/App/Search';

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
