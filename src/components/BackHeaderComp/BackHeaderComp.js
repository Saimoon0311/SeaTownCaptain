import React from 'react';
import {Platform, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './styles';

export const BackHeaderComp = props => {
  return (
    <View style={styles.headerView}>
      <View
        style={{
          width: wp('20'),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons
          onPress={() => props?.onPress()}
          name="arrow-back"
          color={'black'}
          size={hp('3')}
        />
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: hp('2'),
          fontWeight: 'bold',
          width: wp('59'),
        }}>
        {props.heading}
      </Text>
      {props.Status && (
        <Text
          style={{
            marginRight: wp('2'),
            color: props.statusColor,
            fontSize: hp('1.7'),
          }}>
          {props.Status}
        </Text>
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
  );
};
