import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalStyles} from '../../config/globalStyles';
import {CircleImage} from '../CircleImage/CircleImage';
import {color} from '../color';

export const UserBookingViewComp = props => {
  let statusValue = {
    Completed: 'green',
    'In Progress': color.textPrimaryColor,
    Cancelled: 'red',
    Schedule: color.yellowTxtColor,
  };

  const checkStatus = status => {
    return statusValue[status];
  };
  const RenderView = prop => {
    const {data} = prop;
    return (
      <TouchableOpacity
        onPress={() => props.onPress(data)}
        style={styles.mainView}>
        <View>
          <View style={styles.leftView}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Running Out of Gas on a boat
              </Text>
              <Text style={{color: color.themeColorDark, marginTop: hp('0.5')}}>
                21, feb 2022| 12:32 Am
              </Text>
            </View>

            <View style={styles.rightView}>
              <Text
                style={{
                  ...styles.statusText,
                  color: checkStatus(data.status),
                }}>
                {data.status}
              </Text>
            </View>
          </View>
          <Divider style={styles.dividerView} />
          <View style={styles.lastView}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: wp('2'),
              }}>
              <View style={styles.innerlastView}>
                <CircleImage
                  styles={{
                    width: Dimensions.get('window').width * 0.1,
                    height: Dimensions.get('window').width * 0.1,
                    marginRight: wp('2'),
                    marginLeft: wp('2'),
                  }}
                  image={data.innerImage}
                />

                <Text style={{color: color.black, marginRight: hp('0.5')}}>
                  Martin Kenter
                </Text>
                <View style={styles.captainView}>
                  <Text style={{color: color.black, marginRight: hp('0.5')}}>
                    Captain
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...globalStyles.globalTextStyles4,
                  textAlign: 'right',
                  fontSize: hp('2'),
                  marginTop: hp('1'),
                  color: checkStatus(data.status),
                }}>
                AED 750
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return props.loading ? null : (
    <FlatList
      data={props?.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return <RenderView data={item} />;
      }}
    />
  );
};

export const styles = StyleSheet.create({
  mainView: {
    width: wp('90'),
    // height: hp('15'),
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    marginBottom: hp('2'),
    alignSelf: 'center',
    paddingBottom: hp('1'),
  },
  leftView: {
    width: wp('88'),
    marginLeft: wp('2'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  centerView: {
    width: wp('50'),
    justifyContent: 'center',
  },
  headingText: {
    color: 'black',
    fontSize: hp('1.8'),
    fontWeight: 'bold',
    lineHeight: hp('3'),
  },
  issueText: {color: 'blue', fontSize: hp('1.8'), lineHeight: hp('3')},
  dateText: {
    color: color.themeColorDark,
    fontSize: hp('1.8'),
    lineHeight: hp('3'),
  },
  rightView: {width: wp('20'), marginTop: hp('2')},
  statusText: {
    fontSize: hp('1.5'),
    marginRight: wp('2'),
    textAlign: 'right',
  },
  dividerView: {
    backgroundColor: color.themeColorDark,
    width: wp('86'),
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  innerlastView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1'),
  },
  captainView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    width: wp('16'),

    borderRadius: 5,
    backgroundColor: color.yellowTxtColor,
  },
});
