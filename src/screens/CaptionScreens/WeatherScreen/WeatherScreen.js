import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';

const WeatherScreen = ({navigation}) => {
  return (
    <>
      <BackHeaderComp
        heading={'Weather Report'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.TopView}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: color.yellowTxtColor,
                marginTop: hp('3'),
                marginBottom: hp('1.5'),
                fontSize: hp('8'),
              }}
            >
              20°
            </Text>
          </View>
          <Text
            style={{
              color: color.white,
              marginBottom: hp('1'),
              fontSize: hp('2'),
            }}
          >
            Al Khan Street, Al Khan, Sharjah
          </Text>
          <Text style={{color: color.themeColorDark, fontSize: hp('2')}}>
            Time 20:25
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: wp('85'),
              paddingVertical: hp('3.5'),
            }}
          >
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Water
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>86 °F</Text>
            </View>
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Wind
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>
                S at 10 Mph
              </Text>
            </View>
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Gust
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>
                24 Mph
              </Text>
            </View>
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Swell
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>
                0.3 Ft
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: wp('85'),
              paddingBottom: hp('3'),
            }}
          >
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Humidity
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>60%</Text>
            </View>
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Sunrise
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>
                6:30AM
              </Text>
            </View>
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Sunset
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>
                5:20AM
              </Text>
            </View>
            <View
              style={{
                width: wp('20'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: color.yellowTxtColor, fontSize: hp('2')}}>
                Low Tide
              </Text>
              <Text style={{color: color.white, fontSize: hp('2')}}>22</Text>
            </View>
          </View>
        </View>
        <View style={styles.midView}>
          <Image source={require('../../../images/graph1.png')} />
        </View>
        <View style={styles.lastView}>
          <Image source={require('../../../images/tidesReport.png')} />
        </View>
      </ScrollView>
    </>
  );
};

export default WeatherScreen;
