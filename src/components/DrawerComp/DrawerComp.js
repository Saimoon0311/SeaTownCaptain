import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from 'react-native';
import {color} from '../color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import {Switch} from 'react-native-paper';
// import {Radio, RadioGroup} from '@ui-kitten/components';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

const DrawerComp = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [checked, setChecked] = useState('first');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigateScreens = screenName => {
    navigation.goBack();
    navigation.navigate(screenName);
  };
  return (
    <ImageBackground
      source={require('../../images/SeaTow-(User-Flow).png')}
      style={styles.mainView}>
      <Animatable.View
        delay={150}
        easing={'linear'}
        direction={'normal'}
        animation="fadeInLeft"
        style={styles.leftView}>
        <View style={{marginTop: hp('10'), marginLeft: wp('5')}}>
          <Text style={styles.topHeading}>Menu</Text>
          <View>
            <View style={styles.innerView}>
              <Ionicons
                name={'ios-stopwatch-outline'}
                size={hp('3')}
                color={color.yellowTxtColor}
                style={{marginRight: wp('2')}}
              />
              <Text style={styles.labelStyle}>Availability</Text>
              <MaterialIcons
                name={show ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
                size={hp('3.5')}
                onPress={() => setShow(!show)}
                color={color.yellowTxtColor}
                style={{marginLeft: 'auto'}}
              />
            </View>
            {show && (
              <RadioGroup
                style={{
                  marginTop: hp('2'),
                  marginLeft: wp('6'),
                  height: hp('15'),
                  justifyContent: 'space-between',
                }}
                color={color.alertBackgroundColor}
                onSelect={(index, value) => setSelectedIndex(value, index)}>
                <RadioButton value={'item1'}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: hp('2'),
                      marginLeft: wp('2'),
                    }}>
                    Available
                  </Text>
                </RadioButton>

                <RadioButton value={'item2'}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: hp('2'),
                      marginLeft: wp('2'),
                    }}>
                    On Duty
                  </Text>
                </RadioButton>

                <RadioButton value={'item3'}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: hp('2'),
                      marginLeft: wp('2'),
                    }}>
                    Offline
                  </Text>
                </RadioButton>
              </RadioGroup>
            )}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigateScreens('ChangePasswordScreen')}
              style={styles.innerView}>
              <Ionicons
                name="lock-closed-outline"
                size={hp('3')}
                color={color.yellowTxtColor}
                style={{marginRight: wp('2')}}
              />
              <Text style={styles.labelStyle}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.innerView}>
            <Ionicons
              name="notifications-outline"
              size={hp('3')}
              color={color.yellowTxtColor}
              style={{marginRight: wp('2')}}
            />
            <Text style={styles.labelStyle}>Notification</Text>
            <Switch
              color={color.yellowTxtColor}
              style={{marginLeft: 'auto'}}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateScreens('TermOfServices')}
            style={styles.innerView}>
            <MaterialIcons
              name="event-note"
              size={hp('3')}
              color={color.yellowTxtColor}
              style={{marginRight: wp('2')}}
            />
            <Text style={styles.labelStyle}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateScreens('PrivacyPolicy')}
            style={styles.innerView}>
            <MaterialIcons
              name="event-note"
              size={hp('3')}
              color={color.yellowTxtColor}
              style={{marginRight: wp('2')}}
            />
            <Text style={styles.labelStyle}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigateScreens('LoginScreen')}
          style={{
            ...styles.innerView,
            position: 'absolute',
            bottom: hp('10'),
            marginLeft: wp('5'),
          }}>
          <Ionicons
            name="log-in-outline"
            size={hp('3')}
            color={color.yellowTxtColor}
            style={{marginRight: wp('2')}}
          />
          <Text
            style={{
              fontWeight: '500',
              fontSize: hp('2'),
              color: 'white',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View
        delay={100}
        easing={'linear'}
        direction={'normal'}
        animation="fadeInUpBig">
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}>
          <Image
            style={{
              width: wp('30'),
              height: hp('80'),
              marginRight: wp('-3'),
              // borderTopLeftRadius: 20,
              // borderBottomLeftRadius: 20,
              // overflow: 'hidden',
            }}
            source={require('../../images/drawerRight.png')}
            resizeMode="contain"
          />
        </Pressable>
      </Animatable.View>
    </ImageBackground>
  );
};

export default DrawerComp;
