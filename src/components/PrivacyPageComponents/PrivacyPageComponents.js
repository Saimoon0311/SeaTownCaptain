import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {BackHeaderComp} from '../BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const PrivacyPageComponents = props => {
  console.log(45, props);
  return (
    <>
      <BackHeaderComp onPress={() => props?.onPresss()} />
      <ScrollView style={styles.Container}>
        <View style={styles.innerView}>
          <Text style={styles.txt}>{props?.text}</Text>
          <Text style={styles.dateTxt}>{props?.date}</Text>
          <Text style={styles.desTxt}>{props?.des}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default PrivacyPageComponents;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  innerView: {
    marginTop: hp('3'),
    marginLeft: wp('5'),
    width: wp('90'),
    marginBottom: hp('3'),
  },
  txt: {
    fontSize: hp('3.1'),
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: 'black',
  },
  dateTxt: {
    fontSize: hp('1.8'),
    color: 'black',
    // fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  desTxt: {
    color: 'black',
    marginTop: hp('3'),
    fontSize: hp('1.8'),
    textAlign: 'justify',
    lineHeight: hp('2.1'),
    // fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
