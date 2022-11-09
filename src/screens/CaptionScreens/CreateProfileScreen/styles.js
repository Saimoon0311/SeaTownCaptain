import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  headingView: {
    flexDirection: 'row',
    marginTop: hp('5'),
    width: wp('90'),
    alignSelf: 'center',
    marginBottom: hp('2'),
  },
  trackMainView: {
    position: 'absolute',
    height: hp('100'),
    width: wp('100'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(42,42,42,0.6)',
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  trackInnerView: {
    width: wp('80'),
    height: hp('50'),
    backgroundColor: 'white',
    borderRadius: 10,
    top: hp('-3'),
    // justifyContent: 'space-around',
  },
  topHeading: {
    marginTop: hp('7'),
    textAlign: 'center',
    fontSize: hp('2.5'),
    fontWeight: 'normal',
  },
  circleImage: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  uploadView: {
    width: wp('90'),
    height: hp('20'),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
