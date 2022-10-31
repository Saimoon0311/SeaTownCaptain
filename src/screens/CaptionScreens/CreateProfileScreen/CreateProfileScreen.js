import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import TextInputWithTextCom from '../../../components/TextInputWithTextCom/TextInputWithTextCom';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {color} from '../../../components/color';
import {styles} from './styles';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
const CreateProfileScreen = ({navigation}) => {
  const [isFocused, setIsFocused] = useState({
    City: false,
    Designation: false,
    Company: false,
    Working: false,
  });
  const [loginUser, setLoginUser] = useState({
    City: '',
    Designation: '',
    Company: '',
    Working: '',
  });
  const [openConfirmView, setOpenConfirmView] = useState(false);
  const {City, Designation, Company, Working} = loginUser;
  const updateState = data => setLoginUser(() => ({...loginUser, ...data}));
  // Focused handler
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
  const ProfileUpdateView = () => {
    return (
      <View style={styles.trackMainView}>
        <View style={{...styles.trackInnerView, height: hp('40'), padding: 12}}>
          <Ionicons
            name="close-sharp"
            color={color.textInputColor}
            size={hp('3')}
            onPress={() => {
              setOpenConfirmView(false),
                navigation.navigate('CaptionBottomNavigation');
            }}
            style={{
              alignSelf: 'flex-end',
              //   marginRight: wp('2'),
            }}
          />
          <Image
            source={require('../../../images/yellowTick.png')}
            resizeMode={'contain'}
            style={{alignSelf: 'center'}}
          />
          <TextHeadingCom
            heading="Your profile creation has been 
            completed successfully!"
            style={{textAlign: 'center', marginTop: hp('2')}}
          />
          <TextHeadingCom
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nulla aliquet malesuada morbi purus."
            style={{
              textAlign: 'center',
              color: color.iconColor,
              fontSize: hp('1.6'),
              marginTop: hp('2'),
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <TextHeadingCom heading="Create Profile" style={styles.topHeading} />
      <ScrollView contentContainerStyle={{paddingBottom: hp('20')}}>
        <View>
          <CircleImage
            image={require('../../../images/PngItem_1300400.png')}
            styles={styles.circleImage}
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
        <TextHeadingCom
          heading="Personal Info"
          style={{paddingLeft: wp('5'), marginTop: hp('5')}}
        />
        <LoginInputComp
          value={Designation}
          onChangeText={Designation => updateState({Designation})}
          inputText="Designation"
          placeholder="Designation"
          onFocus={() => handleInputFocus('Designation')}
          onBlur={() => handleInputBlur('Designation')}
          eyeIconName={'eye-off-outline'}
          isFocused={isFocused.Designation}
          inputView={{
            width: wp('78'),
          }}
          changeIcon={
            <Entypo
              size={hp('2')}
              name="chevron-thin-down"
              color={color.textPrimaryColor}
            />
          }
          style={{marginTop: hp('2'), alignSelf: 'center', width: wp('90')}}
        />
        <LoginInputComp
          value={City}
          onChangeText={City => updateState({City})}
          inputText="City"
          placeholder="City"
          onFocus={() => handleInputFocus('City')}
          onBlur={() => handleInputBlur('City')}
          eyeIconName={'eye-off-outline'}
          isFocused={isFocused.City}
          inputView={{
            width: wp('78'),
          }}
          changeIcon={
            <Entypo
              size={hp('2')}
              name="chevron-thin-down"
              color={color.textPrimaryColor}
            />
          }
          style={{marginTop: hp('2'), alignSelf: 'center', width: wp('90')}}
        />
        <LoginInputComp
          value={Working}
          onChangeText={Working => updateState({Working})}
          inputText="Working Hours"
          placeholder="Working Hours"
          onFocus={() => handleInputFocus('Working')}
          onBlur={() => handleInputBlur('Working')}
          eyeIconName={'eye-off-outline'}
          isFocused={isFocused.Working}
          inputView={{
            width: wp('78'),
          }}
          changeIcon={
            <Octicons
              size={hp('2.4')}
              name="clock"
              color={color.textPrimaryColor}
            />
          }
          style={{marginTop: hp('2'), alignSelf: 'center', width: wp('90')}}
        />
        <View style={styles.headingView}>
          <TextHeadingCom heading="Add Experience" />
          <PlusButtonText
            styles={{
              marginLeft: 'auto',
              width: wp('30'),
            }}
            text="Upload More"
          />
        </View>
        <LoginInputComp
          value={Company}
          onChangeText={Company => updateState({Company})}
          inputText="Company Name"
          placeholder="Company Name"
          onFocus={() => handleInputFocus('Company')}
          onBlur={() => handleInputBlur('Company')}
          isFocused={isFocused.Company}
          inputView={{
            width: wp('78'),
          }}
          style={{marginTop: hp('2'), alignSelf: 'center', width: wp('90')}}
        />
        <LoginInputComp
          value={Designation}
          onChangeText={Designation => updateState({Designation})}
          inputText="Designation"
          placeholder="Designation"
          onFocus={() => handleInputFocus('Designation')}
          onBlur={() => handleInputBlur('Designation')}
          eyeIconName={'eye-off-outline'}
          isFocused={isFocused.Designation}
          inputView={{
            width: wp('78'),
          }}
          changeIcon={
            <Entypo
              size={hp('2')}
              name="chevron-thin-down"
              color={color.textPrimaryColor}
            />
          }
          style={{marginTop: hp('2'), alignSelf: 'center', width: wp('90')}}
        />

        <TextHeadingCom
          heading="Required Documents"
          style={{paddingLeft: wp('5'), marginTop: hp('5')}}
        />
        <ImageBackground
          source={require('../../../images/dash.png')}
          resizeMode="contain"
          style={styles.uploadView}>
          <Ionicons
            name="cloud-upload-outline"
            color={color.iconColor}
            size={hp('5')}
          />
          <TextHeadingCom
            heading="Upload Documents"
            style={{color: color.iconColor}}
          />
        </ImageBackground>
        <View
          style={{flexDirection: 'row', width: wp('90'), alignSelf: 'center'}}>
          <View style={{width: wp('45')}}>
            <TextHeadingCom
              heading="Emirates ID*, License*"
              style={{fontSize: hp('1.7'), color: color.iconColor}}
            />
          </View>
          <View style={{width: wp('45'), alignItems: 'flex-end'}}>
            <TextHeadingCom
              heading="PDF, DOC, JPG"
              style={{fontSize: hp('1.7'), color: color.iconColor}}
            />
          </View>
        </View>
        <CommonButtonComp
          viewStyle={{width: wp('90'), marginTop: hp('5')}}
          onPress={() => setOpenConfirmView(true)}
          text="Save"
        />
      </ScrollView>
      {openConfirmView && <ProfileUpdateView />}
    </View>
  );
};

export default CreateProfileScreen;
