import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  touchView: {
    width: wp('28'),
    height: hp('13'),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    padding: 12,
    elevation: 3,
    margin: 4.5,
  },
  innerImage: {
    width: wp('8'),
    height: hp('5'),
    alignSelf: 'center',
  },
  innerText: {
    textAlign: 'center',
    marginTop: hp('1'),
    color: 'black',
    fontSize: hp('1.5'),
    fontWeight: 'bold',
  },
  flatListView: {
    justifyContent: 'space-around',
    width: wp('100'),
    alignItems: 'center',
    height: 'auto',
    marginTop: hp('2'),
  },
});
