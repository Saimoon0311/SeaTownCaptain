import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../color';

export const LoginInputComp = props => {
  return (
    <View
      style={{
        ...styles.inputView,
        ...props?.style,
        borderColor:
          props?.isFocused == true
            ? color.textSecondaryColor
            : props?.value != ''
            ? color.white
            : color.borderThirdColor,
        borderWidth: props?.isFocused == true ? 2 : 1,
        backgroundColor:
          props?.isFocused == true ? 'white' : color.borderThirdColor,
      }}>
      {props.firstIcon && (
        <Ionicons
          onPress={props?.firstIconPress}
          name={props?.firstIcon}
          color={props?.firstIconColor}
          style={{
            marginRight: wp('2'),
            // marginLeft: wp('3'),
          }}
          size={hp('2')}
        />
      )}

      <TextInput
        style={{
          color: 'black',
          fontSize: hp('2'),
          width: wp('65'),
        }}
        ref={props?.ref}
        placeholder={props?.placeholder}
        placeholderTextColor={color.themeColorDark}
        keyboardType={props?.keyboardType}
        secureTextEntry={props?.secureTextEntry}
        editable={props?.editable}
        onChangeText={props?.onChangeText}
        value={props?.value}
        onFocus={props?.onFocus}
        onBlur={props?.onBlur}
        autoCapitalize={props?.autoCapitalize}
      />
      <Ionicons
        onPress={props?.eyeIconPress}
        name={props?.eyeIconName}
        color={
          props?.isFocused == true
            ? color.textSecondaryColor
            : color.themeColorDark
        }
        style={{marginLeft: 'auto', marginRight: wp('3')}}
        size={hp('2')}
      />
    </View>
  );
};
