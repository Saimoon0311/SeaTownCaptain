import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const TextHeadingCom = props => {
  return (
    <Text
      style={{
        ...styles.textStyle,
        ...props?.style,
      }}>
      {props?.heading}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: hp('2'),
    fontWeight: 'bold',
    color: 'black',
  },
});
