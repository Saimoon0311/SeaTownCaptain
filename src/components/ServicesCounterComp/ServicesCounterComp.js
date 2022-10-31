import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const ServicesCounterComp = props => {
  const colorType = {
    'Total Bookings': color.BookingTypeColor,
    Completed: '#2BD254',
    Cancelled: color.badgeColor,
  };

  const checkStatus = status => {
    return colorType[status];
  };

  return (
    <View style={{...styles.mainView, borderColor: checkStatus(props?.status)}}>
      <Text style={{...styles.numberText, color: checkStatus(props?.status)}}>
        {props?.number}
      </Text>
      <Text style={styles.typeText}>{props?.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('30'),
    height: hp('13'),
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: hp('5'),
    color: color.lightBlueColor,
    fontWeight: 'bold',
  },
  typeText: {color: 'black', fontSize: hp('1.7')},
});
