import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90'),
    alignSelf: 'center',
    backgroundColor: 'white',
    height: hp('100'),
    textDecorationLine: 'underLine',
  },
  topImage: {
    width: wp('50'),
    height: hp('10'),
    alignSelf: 'center',
    top: hp('-4'),
  },
  rememberView: {
    flexDirection: 'row',
    width: wp('80'),
    alignSelf: 'center',
    marginTop: hp('2'),
    alignItems: 'center',
  },
  rememberText: {
    color: color.textColor,
    fontSize: hp('1.5'),
    marginLeft: wp('2'),
  },
  forgetText: {color: 'red', fontSize: hp('1.5')},
  loginText: {
    fontSize: hp('1.5'),
    color: 'gray',
    textAlign: 'center',
    marginTop: hp('2'),
  },
});
