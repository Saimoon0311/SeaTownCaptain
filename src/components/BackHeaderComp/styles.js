import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  headerView: {
    width: wp('100'),
    height: Platform.OS == 'ios' ? hp('12') : hp('7'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS == 'ios' ? hp('5.5') : hp('0'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
