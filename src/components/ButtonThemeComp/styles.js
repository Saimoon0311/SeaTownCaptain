import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const styles = StyleSheet.create({
  ButtonView: {
    width: wp('80'),
    height: hp('6'),
    backgroundColor: color.textPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ButtonText: {
    color: 'white',
    fontSize: hp('1.5'),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
