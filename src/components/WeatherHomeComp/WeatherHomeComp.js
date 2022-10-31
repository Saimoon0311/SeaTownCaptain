import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const WeatherHomeComp = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.onPress()}
      style={{...styles.mainView, ...props.style}}>
      <View
        style={{
          width: wp('55'),
        }}>
        <Text style={styles.degreeView}>38°</Text>
        <Text style={styles.areaName}>Abu-Dubai-United Arab Emirates</Text>
        <View style={styles.innerView}>
          <Text style={styles.resultText}>Swell : 0.3 Ft</Text>
          <Text style={styles.resultText}>Low Tide : 3 : 30</Text>
          <Text style={styles.resultText}>Wind : S at 10 Mph</Text>
        </View>
      </View>
      <View style={styles.imageView}>
        <Image
          resizeMode="contain"
          source={require('../../images/Wheather.png')}
        />
        <Text style={styles.areaName}>Mostly Cloud</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('90'),
    height: hp('20'),
    backgroundColor: color.textPrimaryColor,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  degreeView: {color: 'yellow', fontSize: hp('6')},
  areaName: {
    color: 'white',
    fontSize: hp('1.5'),
    marginTop: hp('1'),
    fontWeight: 'bold',
  },
  innerView: {
    justifyContent: 'space-evenly',
    height: hp('8'),
  },
  resultText: {color: color.themeColorDark, fontSize: hp('1.5')},
  imageView: {
    width: wp('30'),
    alignItems: 'center',
  },
});
