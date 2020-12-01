import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenName from '../global/constants/screenName';
import SignIn from '../views/Authentication/SignIn';
import SignUp from '../views/Authentication/SignUp';
import ForgotPassword from '../views/Authentication/ForgotPassword';
import RecoveryPassword from '../views/Authentication/RecoveryPassword';
import AppNavigator from './AppNav';
import Profile from '../views/App/Profile';
import Setting from '../views/Setting';
import SplashScreen from '../views/SplashScreen';
import { OfflineDataProvider } from '../provider/offlinedata-provider';
import { AuthenticationProvider } from '../provider/authentication-provider';
import CourseDetail from '../views/App/CourseDetail';

const Stack = createStackNavigator();

const RootAppNavigation = () => {
  return (
    <AuthenticationProvider>
      <OfflineDataProvider>
        <NavigationContainer theme={DarkTheme}>
          <RootAppScreen />
        </NavigationContainer>
      </OfflineDataProvider>
    </AuthenticationProvider>
  );
};

const RootAppScreen = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
  };

  return (
    <Stack.Navigator mode='modal' screenOptions={screenOptions}>
      <Stack.Screen
        name={ScreenName.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.SignInScreen}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.SignUpScreen}
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.ForgotPasswordScreen}
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.RecoveryPasswordScreen}
        component={RecoveryPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.AppNavigatorScreen}
        component={AppNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.ProfileScreen}
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name={ScreenName.SettingScreen}
        component={Setting}
        options={{ title: 'Setting' }}
      />
      {/* <Stack.Screen
        name={ScreenName.CourseDetailScreen}
        component={CourseDetail}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default RootAppNavigation;
