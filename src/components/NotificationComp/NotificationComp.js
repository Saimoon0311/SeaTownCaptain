import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const NotificationComp = props => {
  const RederView = props => {
    const {data} = props;
    return (
      <View style={styles.renderView}>
        <View style={styles.leftView}>
          <View style={styles.leftInnerView}>
            <Image source={data?.image} resizeMode="contain" />
          </View>
        </View>
        <View style={styles.centerView}>
          <Text style={{fontSize: hp('2'), color: 'black'}}>Heading</Text>
          <Text style={styles.subHeading}>Sub Heading</Text>
        </View>
        <View style={styles.rightView}>
          <Text style={{color: color.themeColorDark, fontSize: hp('1.5')}}>
            23h
          </Text>
        </View>
      </View>
    );
  };
  return props.loading ? null : (
    <FlatList
      data={props?.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return <RederView data={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatListView: {
    width: wp('100'),
    alignItems: 'center',
    height: 'auto',
    marginTop: hp('2'),
  },
  renderView: {
    width: wp('100'),
    height: hp('10'),
    flexDirection: 'row',
  },
  leftView: {
    width: wp('20'),
    height: hp('10'),
    justifyContent: 'center',
  },
  leftInnerView: {
    width: wp('13'),
    height: hp('6'),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centerView: {
    width: wp('60'),
    height: hp('10'),
    justifyContent: 'center',
  },
  subHeading: {
    fontSize: hp('1.7'),
    color: color.themeColorDark,
    marginTop: hp('0.5'),
  },
  rightView: {
    width: wp('20'),
    height: hp('10'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
