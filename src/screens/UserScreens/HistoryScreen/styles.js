import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  mainView: {
    width: wp('90'),
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: hp('1.5'),
    marginBottom: hp('1.5'),
  },
  leftView: {
    flexDirection: 'row',
    width: wp('50'),
    justifyContent: 'space-between',
    marginTop: hp('0.5'),
  },
  smallText: {color: color.lightBlueColor, fontSize: hp('1.6')},
  rightView: {
    width: wp('23'),
    height: hp('9'),
    backgroundColor: color.lightGrayColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
