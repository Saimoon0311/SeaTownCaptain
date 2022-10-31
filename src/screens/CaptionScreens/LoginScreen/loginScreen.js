import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ApiGet, ApiPost} from '../../../config/helperFunction';
import {LoginUrl, UserUrl} from '../../../config/Urls';
import {useDispatch} from 'react-redux';
import types from '../../../Redux/type';
import {errorMessage} from '../../../components/NotificationMessage';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import CheckBox from '@react-native-community/checkbox';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {BottomTextComp} from '../../../components/BottomTextComp/BottomTextComp';

const CaptainLoginScreen = ({route, navigation}) => {
  const disptach = useDispatch();
  const LoginType = route.params;
  const [isKeyboardVisible, setKeyboardVisible] = useState(hp('0'));
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
    // email: 'secowog808@geekjun.com',
    // email: 'kihosiw869@dnitem.com',
    // email: 'bilal1@gmail.com',
    // password: 'password',
  });
  const [isloading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [alertState, setALertState] = useState(false);

  const {email, password} = loginUser;
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
  // XXXXXXXXXXXX

  const loginFunction = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setLoading(true);
    if (
      email != '' &&
      email != null &&
      password != '' &&
      password != null &&
      reg.test(email) === true
    ) {
      let body = JSON.stringify({
        email: email,
        password: password,
      });
      ApiPost(LoginUrl, body, false).then(res => {
        console.warn(res, 115);
        if (res.status == 200) {
          disptach({
            type: types.LoginType,
            payload: res.json,
          });
          setLoading(false);
        } else if (
          res.status == 401 &&
          res.json.message == 'Please check email'
        ) {
          setLoading(false);
          setALertState(true);
        } else if (res.status == 401) {
          setLoading(false);
          errorMessage(res.json.message);
        } else {
          errorMessage('Network Request Failed.');
          setLoading(false);
        }
      });
    } else {
      errorMessage('Plesae type correct information.');
      setLoading(false);
    }
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(hp('35')); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(hp('0')); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    // <KeyboardAvoidingComponent />
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../../images/Loginogo.png')}
          style={styles.topImage}
          resizeMode="contain"
        />
        <TextHeadingCom heading={'Login'} style={{marginTop: hp('7')}} />
        <Text style={styles.loginText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Text>
        <LoginInputComp
          value={email}
          onChangeText={email => updateState({email})}
          inputText="Email"
          placeholder="mail@gmail.com"
          onFocus={() => {
            handleInputFocus('email');
          }}
          onBlur={() => handleInputBlur('email')}
          isFocused={isFocused.email}
          style={{marginTop: hp('6')}}
        />
        <LoginInputComp
          value={password}
          onChangeText={password => updateState({password})}
          inputText="Password"
          placeholder="password"
          onFocus={() => handleInputFocus('password')}
          onBlur={() => handleInputBlur('password')}
          secureTextEntry={show ? false : true}
          eyeIconPress={handleClick}
          eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
          isFocused={isFocused.password}
          eyeIcon={true}
          style={{marginTop: hp('2')}}
        />
        <View style={styles.rememberView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.rememberText}>Remember me</Text>
          <TouchableOpacity
            style={{marginLeft: 'auto'}}
            onPress={() => navigation.navigate('ForgetScreen')}
            // onPress={() => navigation.navigate('PrivacyPolicy')}
          >
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <ButtonThemeComp
          onPress={() => navigation.navigate('CreateProfileScreen')}
          // onPress={() => navigation.navigate('UserBottomnavigation')}
          text={'Login'}
          style={{marginTop: hp('2')}}
        />
        {/* <ButtonThemeComp
          onPress={() => navigation.navigate('CaptionBottomNavigation')}
          text={'Caption Login'}
          style={{marginTop: hp('2')}}
        /> */}
      </ScrollView>
      {/* <BottomTextComp
        onPress={() => navigation.navigate('SignUpScreen')}
        note={"Don't have account ? "}
        heading={'Sign Up'}
      /> */}
    </KeyboardAvoidingView>
  );
};

export default CaptainLoginScreen;
