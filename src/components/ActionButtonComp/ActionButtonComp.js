import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ActionButtonComp = props => {
  const {style} = props;
  return (
    <View
      style={{
        width: wp('12'),
        height: hp('5'),
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6.68,
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        style,
      }}>
      <Image source={props?.image} resizeMode="contain" />
    </View>
  );
};
