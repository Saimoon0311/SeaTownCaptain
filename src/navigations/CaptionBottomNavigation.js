import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, Dimensions, StyleSheet, Image} from 'react-native';
import {captionScreens} from '../screens/CaptionScreens/index';
import * as Animatable from 'react-native-animatable';
import {color} from '../components/color';

const Tab = createBottomTabNavigator();
function CaptionBottomNavigation() {
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
        name="GuiderHomeScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Animatable.View
              animation="fadeInUpBig"
              direction={'normal'}
              delay={200}>
              <Image
                source={require('../images/homeactive.png')}
                resizeMode="contain"
                style={{width: wp('7'), tintColor: color}}
              />
              {/* <Ionicons name={'home-outline'} color={color} size={hp('3')} /> */}
            </Animatable.View>
          ),
          title: 'Home',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
        component={captionScreens.GuiderHomeScreen}
      />
      <Tab.Screen
        name="GuiderBookingScreen"
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
        component={captionScreens.GuiderBookingScreen}
      />

      <Tab.Screen
        name="GuiderProfileScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Animatable.View
              animation="fadeInRightBig"
              direction={'normal'}
              delay={300}>
              <Ionicons name={'person-outline'} color={color} size={hp('3')} />
            </Animatable.View>
          ),
          title: '',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
        component={captionScreens.GuiderProfileScreen}
      />
    </Tab.Navigator>
  );
}
export default CaptionBottomNavigation;

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
