import {StyleSheet} from 'react-native';
import {color} from '../color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: color.textPrimaryColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  leftView: {
    width: wp('68'),
    height: hp('100'),
  },
  topHeading: {
    fontSize: hp('5'),
    color: 'white',
    fontWeight: 'bold',
    // marginBottom: hp('2'),
  },
  innerView: {
    flexDirection: 'row',
    width: wp('60'),
    alignItems: 'center',
    marginTop: hp('5.5'),
  },
  labelStyle: {
    fontWeight: '500',
    fontSize: hp('2'),
    color: 'white',
  },
});
