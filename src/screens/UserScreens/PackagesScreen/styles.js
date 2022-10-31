import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  imageBackgroundView: {
    width: wp('80'),
    height: hp('65'),
    marginTop: hp('2'),
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: wp('5'),
    marginRight: wp('2'),
    borderRadius: 20,
  },
  priceText: {color: 'white', fontSize: hp('3'), marginTop: hp('2')},
  centerView: {
    width: wp('64'),
    height: hp('43'),
    marginTop: hp('3'),
    justifyContent: 'space-between',
  },
  detailsView: {
    flexDirection: 'row',
    width: wp('64'),
    alignItems: 'center',
  },
  detailsText: {
    fontSize: hp('1.7'),
    marginLeft: wp('2'),
    width: wp('55'),
    color: 'white',
    fontWeight: 'bold',
  },
  bookButton: {
    width: wp('60'),
    backgroundColor: color.yellowTxtColor,
    borderRadius: 30,
    marginTop: hp('3'),
  },
});
