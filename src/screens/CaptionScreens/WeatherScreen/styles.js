import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  TopView: {
    backgroundColor: color.textPrimaryColor,
    alignSelf: 'center',
    width: wp('85'),
    marginTop: hp('5'),

    borderRadius: 10,
    alignItems: 'center',
  },
  midView: {
    // backgroundColor: color.textPrimaryColor,
    alignSelf: 'center',
    marginTop: hp('2'),
    marginLeft: wp('2'),
    borderRadius: 10,
    alignItems: 'center',
  },
  lastView: {
    // backgroundColor: color.textPrimaryColor,
    alignSelf: 'center',
    // marginTop: hp('2'),
    marginLeft: wp('2'),
    borderRadius: 10,
    alignItems: 'center',
  },
});
