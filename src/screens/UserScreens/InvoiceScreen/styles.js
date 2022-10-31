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
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    height: hp('11'),
    width: wp('90'),
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: wp('3'),
  },
  paymentView: {
    height: hp('3.2'),
    marginBottom: hp('0.5'),
    width: wp('26'),
    // padding: 5,
    alignSelf: 'flex-end',
    backgroundColor: color.orangeColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListView: {
    marginBottom: hp('6'),
  },
});
