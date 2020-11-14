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

const Stack = createStackNavigator();

const SearchStackScreen = () => {
  const [text, setText] = useState('');

  const onChange = (value) => {
    setText(value);
  };

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
        header: (props) => {
          return (
            <SearchHeader
              navigation={navigation}
              text={text}
              onChange={onChange}
            />
          );
        },
      })}
    >
      <Stack.Screen
        name={ScreenName.SearchRecentScreen}
        component={Search}
        initialParams={{ text: text }}
      />
      {/* <Stack.Screen
        name={ScreenName.}
        component={}
      />

      <Stack.Screen
        name={ScreenName.}
        component={}
      /> */}
    </Stack.Navigator>
  );
};

export default SearchStackScreen;
