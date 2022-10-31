import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, Dimensions, StyleSheet} from 'react-native';
import {screens} from '../screens/UserScreens/index';
import * as Animatable from 'react-native-animatable';
import {color} from '../components/color';
import {globalStyles} from '../config/globalStyles';

const Tab = createBottomTabNavigator();
function UserBottomnavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: color.textPrimaryColor,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarActiveBackgroundColor: color.white,
        tabBarInactiveBackgroundColor: color.white,
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarStyle: {
          height: hp('10'),
          paddingBottom: hp('0'),
          // bottom: Platform.OS == 'ios' ? hp('4') : hp('2'),
          width: wp('100'),
          alignSelf: 'center',
          // borderRadius: Platform.OS == 'android' ? 10 : 20,
          overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Animatable.View
              animation="fadeInUpBig"
              direction={'normal'}
              delay={200}>
              <Ionicons name={'home-outline'} color={color} size={hp('3')} />
            </Animatable.View>
          ),
          title: 'Home',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
        component={screens.HomeScreen}
      />
      <Tab.Screen
        name="BookingScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Animatable.View
              animation="fadeInRightBig"
              direction={'normal'}
              delay={300}>
              <Ionicons
                name={'calendar-outline'}
                color={color}
                size={hp('3')}
              />
            </Animatable.View>
          ),
          title: '',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
        component={screens.BookingScreen}
      />
      <Tab.Screen
        name="EmergncySOSScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Animatable.View
              animation="fadeInRightBig"
              direction={'normal'}
              delay={300}
              style={{
                width: wp('10'),
                height: hp('5'),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                bottom: hp('1'),
                borderRadius: 10,
              }}>
              <Feather name={'phone-call'} color={'white'} size={hp('2')} />
            </Animatable.View>
          ),
          title: 'SOS Call',
          tabBarLabelStyle: {
            fontSize: hp('1.5'),
            bottom: hp('2'),
            color: 'black',
          },
        }}
        component={screens.EmergncySOSScreen}
      />
      <Tab.Screen
        name="MemberShipScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Animatable.View
              animation="fadeInRightBig"
              direction={'normal'}
              delay={300}>
              <MaterialCommunityIcons
                name={'crown-outline'}
                color={color}
                size={hp('3.9')}
              />
            </Animatable.View>
          ),
          title: '',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
        component={screens.MemberShipScreen}
      />
      <Tab.Screen
        name="InvoiceScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Animatable.View
              animation="fadeInRightBig"
              direction={'normal'}
              delay={300}>
              <Ionicons
                name={'newspaper-outline'}
                color={color}
                size={hp('3')}
              />
            </Animatable.View>
          ),
          title: '',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
        component={screens.InvoiceScreen}
      />
    </Tab.Navigator>
  );
}
export default UserBottomnavigation;

const styles = StyleSheet.create({
  cartCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    bottom: hp('-2'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').width * 0.18,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cartInsideCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').width * 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    // borderColor: color,
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: color.badgeColor,
  },
});
