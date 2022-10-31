import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  requestSmallButton: {
    width: wp('50'),
    height: hp('5'),
    borderColor: color.textPrimaryColor,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
  },
  serContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('95'),
    alignItems: 'center',
  },
});
