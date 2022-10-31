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
      <StatusBar hidden={false} barStyle={'dark-content'} />
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
// {/* <ImageBackground
// style={styles.backgroundImage}
// source={require('../../images/background.png')}>
// <KeyboardAvoidingView
//   behavior={Platform.OS == 'ios' ? 'position' : 'height'}
//   style={styles.container}>
//   <TouchableOpacity
//     style={{
//       top: hp('4'),
//       left: wp('2'),
//       height: hp('7.5'),
//       width: wp('10'),
//     }}
//     onPress={() => {
//       navigation.goBack();
//     }}>
//     <Ionicons
//       name="arrow-back"
//       color={'white'}
//       size={hp('5')}

//       // style={{backgroundColor:'red',top: hp('4'), left: wp('2')}}
//     />
//   </TouchableOpacity>
//   <ScrollView
//     contentContainerStyle={{paddingBottom: hp('10')}}
//     showsVerticalScrollIndicator={false}>
//     <Animatable.View
//       animation="fadeInUpBig"
//       direction={'normal'}
//       delay={100}
//       style={styles.innerView}>
//       <Image
//         source={require('../../images/Group680.png')}
//         style={{
//           marginRight: 'auto',
//           marginLeft: wp('-10'),
//         }}
//       />
//     </Animatable.View>
//     <View style={styles.loginView}>
//       <Animatable.Text
//         animation="fadeInUpBig"
//         direction={'normal'}
//         delay={200}
//         style={styles.mainHeading}>
//         Login
//       </Animatable.Text>
//       <Animatable.View
//         animation="fadeInUpBig"
//         direction={'normal'}
//         delay={300}>
//         <TextInputCom
//           ref={emailRef}
//           value={email}
//           onChangeText={email => updateState({email})}
//           inputText="Email"
//           placeholder="mail@gmail.com"
//           onFocus={() => {
//             handleInputFocus('email');
//           }}
//           onBlur={() => handleInputBlur('email')}
//           isFocused={isFocused.email}
//         />
//       </Animatable.View>
//       <Animatable.View
//         animation="fadeInUpBig"
//         direction={'normal'}
//         delay={400}>
//         <TextInputCom
//           value={password}
//           onChangeText={password => updateState({password})}
//           inputText="Password"
//           placeholder="*********"
//           onFocus={() => handleInputFocus('password')}
//           onBlur={() => handleInputBlur('password')}
//           secureTextEntry={show ? false : true}
//           eyeIconPress={handleClick}
//           eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
//           isFocused={isFocused.password}
//           eyeIcon={true}
//         />
//       </Animatable.View>
//       <Animatable.View
//         animation="fadeInUpBig"
//         direction={'normal'}
//         delay={500}>
//         <TouchableOpacity
//           onPress={() => {
//             let forgetPass = 'https://ivacay.co/forgot-password';
//             Linking.openURL(forgetPass);
//           }}
//           style={styles.forgotTextView}>
//           <Text
//             style={{
//               color: color.themeColorDark,
//             }}>
//             Forgot Password?
//           </Text>
//         </TouchableOpacity>
//       </Animatable.View>
//       <Animatable.View
//         animation="fadeInUpBig"
//         direction={'normal'}
//         delay={600}
//         style={styles.bottomView}>
//         {LoginType == 'Traveller' ? (
//           <View style={{flexDirection: 'row'}}>
//             <Text style={styles.newUserText}>New User ? </Text>
//             <TouchableOpacity
//               onPress={() => navigation.navigate('SignUpScreen')}>
//               <Text style={styles.signupText}> Signup</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <View />
//         )}
//         {/* <ArrowButtonCom
//           loading={isloading}
//           onPress={() => loginFunction()}
//           text="Submit"
//           height={hp('4.5')}
//           right={wp('-19')}
//         /> */}

//       <ArrowButtonComponenetDup loading={isloading}
//             onPress={() => loginFunction()}
//             text="Submit"
//           loaderColor={color.boxColor}
//           height={hp('4.5')}
//           right={wp('-19')}/>
//       </Animatable.View>

//     </View>
//   </ScrollView>
// </KeyboardAvoidingView>
// </ImageBackground> */}
