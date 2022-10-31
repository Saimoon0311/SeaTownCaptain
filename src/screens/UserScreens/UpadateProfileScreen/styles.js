import {StyleSheet} from 'react-native';
import {color} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp('90'),
    height: hp('6'),
    marginBottom: hp('1'),
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: hp('1'),
  },
  image: {
    marginHorizontal: wp('3'),
  },
  text: {
    fontSize: hp('1.7'),
    color: color.textColor,
  },
  yearText: {
    color: color.lightBlueColor,
    marginLeft: 'auto',
    marginRight: wp('2'),
  },
  inputStyle: {
    alignSelf: 'center',
    marginTop: hp('3'),
    width: wp('90'),
  },
  headingView: {
    flexDirection: 'row',
    marginTop: hp('3'),
    width: wp('90'),
    alignSelf: 'center',
    marginBottom: hp('2'),
  },
});
