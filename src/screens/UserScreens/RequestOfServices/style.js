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
    paddingHorizontal: wp('5'),
  },

  coordenatesView: {
    // backgroundColor: color.lightBlueColor,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.lightBlueColor,
    alignItems: 'center',
  },
  leftText: {color: 'black', fontSize: hp('1.7'), marginLeft: wp('1')},
  rightText: {color: 'black', fontSize: hp('1.7'), marginLeft: 'auto'},
  banner: {
    width: wp('90'),
    //   height: hp('20'),
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: hp('2'),
    borderRadius: 10,
  },
  headingView: {
    width: wp('90'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  issueText: {color: 'black', fontWeight: '500', fontSize: hp('2')},
  dateTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('0.5'),
    alignItems: 'center',
  },
  dateTimeText: {color: color.lightBlueColor, fontSize: hp('1.5')},
  priceButton: {
    width: wp('20'),
    backgroundColor: color.textPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('3.5'),
    borderRadius: 8,
  },
  messageText: {
    width: wp('90'),
    color: color.lightBlueColor,
    alignSelf: 'center',
    textAlign: 'justify',
    marginTop: hp('1'),
    fontSize: hp('1.8'),
  },
  userView: {
    marginTop: hp('2'),
    width: wp('90'),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressView: {
    flexDirection: 'row',
    width: wp('90'),
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  input: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.lightBlueColor,
    // alignItems: 'center',
    height: hp('15'),
    width: wp('90'),
    paddingTop: hp('1'),
  },
  ImageBackgroundContainer: {
    width: wp('25'),
    height: hp('10'),
  },
  dateTimeViewStyle: {flexDirection: 'row', justifyContent: 'space-between'},
});
