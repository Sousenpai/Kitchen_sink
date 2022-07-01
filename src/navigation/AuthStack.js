/* import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack; */

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from '../screens/SignInScreen';
import AppStack from './src/navigation/AppStack';
import {Provider as AuthProvider} from './src/context/AuthContext';
import SignUpScreen1 from '../screens/SignUpScreen1';
import { setNavigator } from '../navigationRef';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignUpScreen1,
    Signin: SignInScreen
  }),
  mainFlow: <AppStack/>
});

const appNavigator = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <appNavigator ref={(navigator)=> {setNavigator}}/>
    </AuthProvider>
  );
};