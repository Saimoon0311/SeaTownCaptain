import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp('90'),
    height: hp('8'),
    marginBottom: hp('1'),
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: hp('1'),
  },
  image: {
    marginHorizontal: wp('3'),
  },
  text: {
    fontSize: hp('1.7'),
    color: color.textColor,
  },
  yearText: {
    color: color.lightBlueColor,
    marginLeft: 'auto',
    marginRight: wp('2'),
  },

  headingView: {
    flexDirection: 'row',
    marginTop: hp('3'),
    width: wp('90'),
    alignSelf: 'center',
    marginBottom: hp('2'),
  },
  trackMainView: {
    position: 'absolute',
    height: hp('100'),
    width: wp('100'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(42,42,42,0.6)',
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  trackInnerView: {
    width: wp('80'),
    height: hp('35'),
    backgroundColor: 'white',
    borderRadius: 10,
    top: hp('-3'),
    justifyContent: 'space-around',
  },
});
