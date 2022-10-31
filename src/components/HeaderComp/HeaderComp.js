import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const HeaderComp = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerLeftView}>
        <TouchableOpacity onPress={() => props?.openDrawer()}>
          <Image
            source={require('../../images/Menu.png')}
            resizeMode="contain"
            style={{height: hp('5'), width: wp('5'), marginLeft: wp('5.5')}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenterView}>
        <Text style={styles.headerText}>{props?.heading}</Text>
      </View>
      <View style={styles.headerRightView}>
        {props.search && (
          <Ionicons
            name="search"
            color={'black'}
            size={hp('3')}
            style={{marginRight: wp('3')}}
            onPress={() => props.searchPress()}
          />
        )}
        {props.notification && (
          <Ionicons
            name="notifications-outline"
            color={'black'}
            size={hp('3')}
            style={{marginRight: wp('5')}}
            onPress={() => props.notificationPress()}
          />
        )}
        {props.edit && (
          <Feather
            name="edit-3"
            color={'black'}
            size={hp('3')}
            style={{marginRight: wp('3')}}
            onPress={() => props.editPress()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('100'),
    height: Platform.OS == 'ios' ? hp('12') : hp('9'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS == 'ios' ? hp('3') : hp('0'),
  },
  headerLeftView: {
    width: wp('22.5'),
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerCenterView: {
    width: wp('55'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: 'black',
    fontSize: hp('2'),
    fontWeight: 'bold',
  },
  headerRightView: {
    width: wp('22.5'),
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
