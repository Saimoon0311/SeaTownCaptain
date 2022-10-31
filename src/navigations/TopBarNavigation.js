import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {color} from '../components/color';
import HistoryScreen from '../screens/UserScreens/HistoryScreen/HistoryScreen';
import PackagesScreen from '../screens/UserScreens/PackagesScreen/PackagesScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

function UserTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarActiveTintColor: 'red',
        tabBarActiveTintColor: color.textPrimaryColor,
        // tabBarActiveBackgroundColor: 'red',
        tabBarActiveBackgroundColor: '#E9691D',
        tabBarInactiveTintColor: color.lightBlueColor,
        upperCaseLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          width: wp('90'),
          alignSelf: 'center',
        },
        tabBarIndicatorStyle: {
          // backgroundColor: 'red',
          backgroundColor: color.textPrimaryColor,
        },
      })}>
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: 'red',
          },
          tabBarLabel: 'Packages',
          tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: hp('2'),
          },
        }}
        name="PackagesScreen"
        component={PackagesScreen}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: 'red',
          },
          tabBarLabel: 'History',
          tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: hp('2'),
          },
        }}
        name="HistoryScreen"
        component={HistoryScreen}
      />
    </Tab.Navigator>
  );
}

export default UserTopTabs;
