import {StyleSheet} from 'react-native';
import {color} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  detailsView: {
    width: wp('90'),
    height: hp('15'),
    backgroundColor: color.textPrimaryColor,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
    marginTop: hp('2'),
  },
  leftText: {color: 'white', fontSize: hp('1.7'), fontWeight: '500'},
  rightText: {
    color: color.yellowTxtColor,
    fontSize: hp('1.7'),
    fontWeight: '500',
  },
  disContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: color.textPrimaryColor,
    backgroundColor: 'white',
    height: hp('6.5'),
    paddingRight: wp('3'),
    paddingLeft: wp('3'),

    borderRadius: 10,
  },
  selTxt: {
    color: color.lightBlueColor,
    marginTop: hp('2'),
    fontSize: hp('1.6'),
  },

  txtInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1'),
    justifyContent: 'space-between',
  },
  mainViewContainer: {
    flexDirection: 'row',
    width: wp('88'),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  midContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp('3'),
    backgroundColor: color.backgroundGrayLight,
  },
  dividerView: {
    backgroundColor: 'white',
    width: wp('100'),
    height: hp('1.5'),
  },
  lastView: {
    alignItems: 'center',
    paddingBottom: hp('5'),
  },
  trackMainView: {
    position: 'absolute',
    height: hp('100'),
    width: wp('100'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(42,42,42,0.6)',
    borderWidth: 1,
    // top: 0,
    bottom: 0,
    zIndex: 1,
  },
  trackInnerView: {
    width: wp('80'),
    height: hp('37'),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    top: hp('-3'),
    paddingTop: hp('2'),
  },
});
