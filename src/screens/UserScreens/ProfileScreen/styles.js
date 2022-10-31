import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  dateTimeText: {color: color.lightBlueColor, fontSize: hp('1.8')},
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp('90'),
    height: hp('8'),
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
  captionText: {
    backgroundColor: color.textPrimaryColor,
    color: color.yellowTxtColor,
    borderRadius: 5,
    marginTop: hp('2'),
    padding: 5,
    fontWeight: hp('2'),
    fontWeight: 'bold',
    width: wp('20'),
    textAlign: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  mileText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('2'),
    alignItems: 'center',
    marginBottom: hp('2'),
  },
});
