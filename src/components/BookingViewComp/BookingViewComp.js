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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CircleImage} from '../CircleImage/CircleImage';
import {color} from '../color';

export const BookingViewComp = props => {
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
        onPress={() => props?.onPress(data)}
        style={styles.mainView}>
        <View style={styles.leftView}>
          <CircleImage image={data.innerImage} />
        </View>
        <View style={styles.centerView}>
          <Text style={styles.issueText}>Omar Lipshutz</Text>
          <Text style={styles.headingText}>Out of Gass</Text>
          <Text style={styles.dateText}>21 feb 2022 | 12:24 AM</Text>
        </View>
        <View style={styles.rightView}>
          <Text
            style={{
              ...styles.statusText1,
              color: checkStatus(data.status),
            }}>
            * {data.status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const RenderProgressView = prop => {
    const {data} = prop;
    return (
      <TouchableOpacity
        style={styles.mainView1}
        onPress={() => props?.onPress(data)}>
        <View style={styles.leftView1}>
          <View style={styles.leftInnerView1}>
            <Image
              source={data?.innerImage}
              style={{
                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.11,
                height: Dimensions.get('window').width * 0.11,
                ...styles,
              }}
            />
            <View>
              <Text style={styles.headingText1}>James Siphron</Text>
              <Text style={styles.headingText1}>Out of Gass</Text>
            </View>
          </View>
          <View style={styles.rightView1}>
            <Text
              style={{
                ...styles.statusText,
                color: checkStatus(data.status),
              }}>
              * {data.status}
            </Text>
            <Text
              style={{
                ...styles.statusText,
                marginTop: hp('2.8'),
                color: color.themeColorDark,
                fontWeight: 'bold',
                fontSize: hp('1.8'),
              }}>
              {data.time}
            </Text>
          </View>
        </View>
        <View style={styles.rightInnerView1}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../images/location.png')}
          />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: hp('2'),
                color: 'black',
              }}>
              35.5 miles
            </Text>
            <Text
              style={{
                color: color.lightBlueColor,
              }}>
              Distance
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return props.loading ? null : (
    <FlatList
      data={props?.data}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{
        flex: 1,
      }}
      renderItem={({item}) => {
        return item.status == 'In Progress' ? (
          <RenderProgressView data={item} />
        ) : (
          <RenderView data={item} />
        );
      }}
    />
  );
};

export const styles = StyleSheet.create({
  mainView1: {
    width: wp('90'),
    height: hp('17'),
    backgroundColor: 'white',
    // flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    marginBottom: hp('2'),
    alignSelf: 'center',
    borderWidth: 1,
    paddingTop: hp('1'),
  },
  leftView1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('8'),
    marginBottom: hp('1'),
  },
  leftInnerView1: {
    flexDirection: 'row',
    width: wp('45'),
    justifyContent: 'space-evenly',
    marginTop: hp('1'),
  },
  centerView1: {
    width: wp('50'),
    justifyContent: 'center',
  },
  headingText1: {
    color: 'black',
    fontSize: hp('1.8'),
    fontWeight: 'bold',
    lineHeight: hp('3'),
  },
  issueText1: {color: 'blue', fontSize: hp('1.8'), lineHeight: hp('3')},
  dateText1: {
    color: color.themeColorDark,
    fontSize: hp('1.8'),
    lineHeight: hp('3'),
  },
  rightView1: {
    width: wp('24'),
    marginRight: wp('4'),
  },
  statusText1: {
    fontSize: hp('1.5'),
    marginRight: wp('7'),
  },
  rightInnerView1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.lightPurpleView,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    height: hp('6'),
    width: wp('6.9'),
    marginRight: wp('3'),
  },
  mainView: {
    width: wp('90'),
    height: hp('13'),
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    marginBottom: hp('2'),
    alignSelf: 'center',
  },
  leftView: {
    width: wp('20'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    width: wp('45'),
    justifyContent: 'center',
  },
  headingText: {
    color: 'black',
    fontSize: hp('1.8'),
    fontWeight: 'bold',
    lineHeight: hp('2.5'),
  },
  issueText: {
    color: color.textPrimaryColor,
    fontSize: hp('1.8'),
    lineHeight: hp('2'),
  },
  dateText: {
    color: color.themeColorDark,
    fontSize: hp('1.8'),
    lineHeight: hp('2.5'),
  },
  rightView: {marginTop: hp('2'), width: wp('28'), alignItems: 'flex-end'},
  statusText: {
    fontSize: hp('1.6'),
    fontWeight: 'bold',
    // marginRight: wp('5'),
    textAlign: 'right',
  },
});
