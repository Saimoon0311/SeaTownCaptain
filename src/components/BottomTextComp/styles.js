import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp('3'),
    alignSelf: 'center',
  },
});
