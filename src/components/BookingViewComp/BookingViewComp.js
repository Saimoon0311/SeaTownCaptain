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
              ...styles.statusText,
              color: checkStatus(data.status),
            }}>
            {data.status}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return props.loading ? null : (
    <FlatList
      data={props?.data}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{}}
      renderItem={({item}) => {
        return <RenderView data={item} />;
      }}
    />
  );
};

export const styles = StyleSheet.create({
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
});
