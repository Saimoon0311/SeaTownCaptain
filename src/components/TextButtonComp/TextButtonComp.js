import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {color} from '../color';
import {LoginInputComp} from '../LoginInputComp/LoginInputComp';
const TextButtonComp = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.onPress()}
      style={{...styles.container, ...props.viewStyle}}>
      {props?.changeIcon ? (
        props.changeIcon
      ) : (
        <Entypo
          style={{marginRight: wp('2')}}
          name={props?.name}
          size={hp('2.5')}
          color={color.textPrimaryColor}
        />
      )}
      <Text style={styles.upperTxt}>{props?.text}</Text>
    </TouchableOpacity>
  );
};

export default TextButtonComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('90'),
    height: hp('6 '),
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    marginTop: hp('1'),
    color: 'black',
    backgroundColor: color.lightPurpleView,
    borderColor: color.textPrimaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
  },
  upperTxt: {
    color: color.textPrimaryColor,
    fontWeight: '500',
    fontSize: hp('1.7'),
  },
  inputView: {
    // borderRadius: 10,
    // // paddingLeft: wp('3'),
    // marginTop: hp('1'),
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    flexDirection: 'row',
    // height: hp('6'),
    width: wp('90'),
    backgroundColor: 'white',
    height: hp('6'),
    padding: 10,
    borderRadius: 10,
    borderColor: color.textInputColor,
    borderWidth: 1,
    marginTop: hp('1'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
