import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  requestButton: {
    width: wp('80'),
    height: hp('7'),
    borderColor: color.textPrimaryColor,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
  },
});
