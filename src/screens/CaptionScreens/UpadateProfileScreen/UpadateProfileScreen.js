import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {color} from '../../../components/color';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';

const UpadateProfileScreen = ({route, navigation}) => {
  const [captionProfile, setCaptionProfile] = useState({
    captionName: 'Alfonso Vaccaro',
    phoneNumber: '55 648 021',
    email: 'alfonso_vac@gmail.com',
    area: 'Sharjah',
    type: 'Captain',
    time: '9AM to 5PM',
  });
  const [isFocused, setIsFocused] = useState({
    captionName: false,
    phoneNumber: false,
    email: false,
    area: false,
    type: false,
    time: false,
  });
  const updateState = data =>
    setCaptionProfile(() => ({...captionProfile, ...data}));
  const {captionName, phoneNumber, email, area, time, type} = captionProfile;
  const handleInputFocus = textinput => {
    setIsFocused({
      [textinput]: true,
    });
  };
  const handleInputBlur = textinput => {
    setIsFocused({
      [textinput]: false,
    });
  };
  const ExperienceView = props => {
    return (
      <View>
        <View style={{...styles.button}}>
          <Image
            style={{...styles.image, width: wp('8'), height: hp('4')}}
            resizeMode="contain"
            source={require('../../../images/Group.png')}
          />
          <View>
            <Text style={{...styles.text}}>{props?.title}</Text>
            <Text style={{...styles.text, color: color.lightBlueColor}}>
              {props?.work}
            </Text>
          </View>
          <View style={styles.yearText}>
            <Ionicons
              name="close-circle-sharp"
              color={color.lightBlueColor}
              size={hp('3')}
              style={{
                marginLeft: 'auto',
              }}
            />
            <Text
              style={{
                ...styles.text,
                color: color.lightBlueColor,
              }}>
              {props?.time}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const DocumentView = props => {
    return (
      <View>
        <View style={{...styles.button, height: hp('8')}}>
          <Image
            style={{...styles.image, ...props.imageStyle}}
            source={props?.image}
          />
          <View>
            <Text style={{...styles.text}}>{props?.title}</Text>
            <Text style={{...styles.text, color: color.lightBlueColor}}>
              {props?.work}
            </Text>
          </View>
          <View style={styles.yearText}>
            <Ionicons
              name="close-circle-sharp"
              color={color.lightBlueColor}
              size={hp('3')}
              style={{
                marginLeft: 'auto',
              }}
            />
          </View>
          {/* <Text
          style={{
            ...styles.text,
            ...styles.yearText,
          }}>
          {props?.time}
        </Text> */}
        </View>
      </View>
    );
  };
  const PlusButtonText = props => {
    const {styles} = props;
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: wp('25'),
          justifyContent: 'space-between',
          ...styles,
        }}>
        <Image
          source={require('../../../images/Plus.png')}
          resizeMode="contain"
        />
        <Text style={{color: 'black', fontSize: hp('1.7')}}>{props?.text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Edit Profile'}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'white',
          paddingBottom: hp('20'),
        }}>
        <View>
          <CircleImage
            image={require('../../../images/Rectangle4307.png')}
            styles={{
              width: Dimensions.get('window').width * 0.4,
              height: Dimensions.get('window').width * 0.4,
              alignSelf: 'center',
              marginTop: hp('2'),
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 0,
              right: wp('30'),
            }}>
            <Image
              source={require('../../../images/Camera.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <LoginInputComp
          style={{
            alignSelf: 'center',
            marginTop: hp('5'),
            width: wp('90'),
          }}
          value={captionName}
          onChangeText={captionName => updateState({captionName})}
          inputText="Email"
          placeholder="mail@gmail.com"
          onFocus={() => {
            handleInputFocus('captionName');
          }}
          onBlur={() => handleInputBlur('captionName')}
          isFocused={isFocused.captionName}
          firstIconColor={color.textPrimaryColor}
          firstIcon="person-outline"
        />
        <LoginInputComp
          style={styles.inputStyle}
          value={phoneNumber}
          onChangeText={phoneNumber => updateState({phoneNumber})}
          inputText="phoneNumber"
          placeholder="mail@gmail.com"
          onFocus={() => {
            handleInputFocus('phoneNumber');
          }}
          onBlur={() => handleInputBlur('phoneNumber')}
          isFocused={isFocused.phoneNumber}
          firstIconColor={color.textPrimaryColor}
          firstIcon="call-outline"
        />
        <LoginInputComp
          style={styles.inputStyle}
          value={email}
          onChangeText={email => updateState({email})}
          inputText="Email"
          placeholder="mail@gmail.com"
          onFocus={() => {
            handleInputFocus('email');
          }}
          onBlur={() => handleInputBlur('email')}
          isFocused={isFocused.email}
          firstIconColor={color.textPrimaryColor}
          firstIcon="ios-mail-outline"
        />
        <LoginInputComp
          style={styles.inputStyle}
          value={area}
          onChangeText={area => updateState({area})}
          inputText="area"
          placeholder="mail@gmail.com"
          onFocus={() => {
            handleInputFocus('area');
          }}
          onBlur={() => handleInputBlur('area')}
          isFocused={isFocused.area}
          firstIconColor={color.textPrimaryColor}
          firstIcon="location-outline"
        />
        <LoginInputComp
          style={styles.inputStyle}
          value={type}
          onChangeText={type => updateState({type})}
          inputText="type"
          placeholder="mail@gmail.com"
          onFocus={() => {
            handleInputFocus('type');
          }}
          onBlur={() => handleInputBlur('type')}
          isFocused={isFocused.type}
          firstIconColor={color.textPrimaryColor}
          firstIcon="briefcase-outline"
        />
        <LoginInputComp
          style={styles.inputStyle}
          value={time}
          onChangeText={time => updateState({time})}
          inputText="time"
          placeholder="mail@gmail.com"
          onFocus={() => {
            handleInputFocus('time');
          }}
          onBlur={() => handleInputBlur('time')}
          isFocused={isFocused.time}
          firstIconColor={color.textPrimaryColor}
          firstIcon="time-outline"
        />
        <View style={styles.headingView}>
          <TextHeadingCom heading="Add Experience" />
          <PlusButtonText
            styles={{
              marginLeft: 'auto',
            }}
            text="Add More"
          />
        </View>
        <ExperienceView
          title="Al Suwaidi Marine"
          work="Boat Caption"
          time="2021 - 2022"
        />
        <ExperienceView
          title="Al Aweidha Marine Services"
          work="Boat Caption"
          time="2016 - 2022"
        />
        <View style={styles.headingView}>
          <TextHeadingCom heading="Document" />
          <PlusButtonText
            styles={{
              marginLeft: 'auto',
              width: wp('30'),
            }}
            text="Upload More"
          />
        </View>
        <DocumentView
          image={require('../../../images/doc.png')}
          title={'Emirates ID'}
          work={'1.59mb'}
        />
        <DocumentView
          image={require('../../../images/pdf.png')}
          title={'Dubai Marine license'}
          work={'55kb'}
          imageStyle={{
            height: wp('13'),
            width: wp('9'),
            // backgroundColor: 'red',
          }}
        />
        <CommonButtonComp
          onPress={() => console.log('djfnb')}
          viewStyle={{
            width: wp('90'),
            marginTop: hp('2'),
          }}
          text="Save Change"
        />
      </ScrollView>
    </View>
  );
};

export default UpadateProfileScreen;
