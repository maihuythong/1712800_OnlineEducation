import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import * as ScreenName from '../../../global/constants/screenName';
import HeaderRight from '../../../components/shared/HeaderRight';
import Category from '../../../views/App/Category';
import CourseDetail from '../../../views/App/CourseDetail';

const Stack = createStackNavigator();

const CategoryStackScreen = () => {
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
        component={Category}
        options={{
          title: 'Category',
          headerTitleAlign: 'left',
          headerLeft: null,
          headerTitleStyle: {
            fontSize: 18,
          },
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

export default CategoryStackScreen;
