import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import Login from '../screens/Login'
import Browse from '../screens/Browse'
import Search from '../screens/Search'
import Play from '../screens/Play'
import Intro from '../screens/Intro'
import Purchase from '../screens/Purchase'
import Bookmarks from '../screens/Bookmarks'
import TabNavigator from './TabNavigator';
import Preference from '../screens/Preference'
import Download from '../screens/Download'
import Promotions from '../screens/Promotions'
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="log-in-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Browse"
        component={Browse}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Play"
        component={Play}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="play-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Intro"
        component={Intro}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="information-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Purchase"
        component={Purchase}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="bookmarks-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Preference"
        component={Preference}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Download"
        component={Download}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="download-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Promotions"
        component={Promotions}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="pricetags-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
