import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';
import {styles} from './styles';

export const BottomTextComp = props => {
  return (
    <View style={{...styles.mainView, ...props?.style}}>
      <Text style={{color: color.themeColorDark, fontSize: hp('1.5')}}>
        {props?.note}
      </Text>
      <TouchableOpacity onPress={() => props?.onPress()}>
        <Text style={{color: color.textPrimaryColor, fontSize: hp('1.5')}}>
          {props?.heading}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
