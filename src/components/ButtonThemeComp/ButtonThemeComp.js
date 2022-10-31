import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';
import {styles} from './styles';

export const ButtonThemeComp = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.onPress()}
      style={{...styles.ButtonView, ...props?.style}}>
      <Text style={{...styles.ButtonText, ...props?.TextStyle}}>
        {props?.text}
      </Text>
    </TouchableOpacity>
  );
};
