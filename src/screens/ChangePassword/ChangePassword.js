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
} from 'react-native';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../components/color';
import {useDispatch} from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import {TextHeadingCom} from '../../components/TextHeadingCom/TextHeadingCom';
import {LoginInputComp} from '../../components/LoginInputComp/LoginInputComp';
import {ButtonThemeComp} from '../../components/ButtonThemeComp/ButtonThemeComp';

const ChangePasswordScreen = ({route, navigation}) => {
  const disptach = useDispatch();
  const emailRef = useRef();
  const LoginType = route.params;
  const [isKeyboardVisible, setKeyboardVisible] = useState(hp('0'));
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [resetPassword, setResetPassword] = useState({
    newPassword: '',
    confirmPassword: '',
    oldPassword: '',
  });
  const [isloading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState({
    // email: false,
    // password: false,
    newPassword: false,
    confirmPassword: false,
    oldPassword: false,
  });
  const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [alertState, setALertState] = useState(false);
  const AwesomeAlertMessage = () => {
    return (
      <AwesomeAlert
        show={alertState}
        showProgress={false}
        title="Warning!"
        message="Account deletion is in process, please verify your email to delete your ivacay account."
        contentContainerStyle={{
          width: wp('80%'),
          backgroundColor: 'white',
        }}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonStyle={styles.buttonstyle}
        cancelButtonStyle={styles.buttonstyle}
        confirmButtonTextStyle={{
          textAlign: 'center',
          color: color?.textPrimaryColor,
          fontSize: hp('2.2%'),
        }}
        titleStyle={{
          color: color.textPrimaryColor,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
        messageStyle={{color: 'gray', textAlign: 'center', color: 'black'}}
        onConfirmPressed={() => {
          setALertState(false);
        }}
      />
    );
  };
  const {newPassword, confirmPassword, oldPassword} = resetPassword;
  const updateState = data =>
    setResetPassword(() => ({...resetPassword, ...data}));
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

  // const loginFunction = () => {
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   setLoading(true);
  //   if (
  //     newPassword != '' &&
  //     newPassword != null &&
  //     confirmPassword != '' &&
  //     confirmPassword != null &&
  //     reg.test(email) === true
  //   ) {
  //     let body = JSON.stringify({
  //       email: email,
  //       password: password,
  //     });
  //     ApiPost(LoginUrl, body, false).then(res => {
  //       console.warn(res, 115);
  //       if (res.status == 200) {
  //         disptach({
  //           type: types.LoginType,
  //           payload: res.json,
  //         });
  //         setLoading(false);
  //       } else if (
  //         res.status == 401 &&
  //         res.json.message == 'Please check email'
  //       ) {
  //         setLoading(false);
  //         setALertState(true);
  //       } else if (res.status == 401) {
  //         setLoading(false);
  //         errorMessage(res.json.message);
  //       } else {
  //         errorMessage('Network Request Failed.');
  //         setLoading(false);
  //       }
  //     });
  //   } else {
  //     errorMessage('Plesae type correct information.');
  //     setLoading(false);
  //   }
  // };
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../images/Loginogo.png')}
          style={styles.topImage}
          resizeMode="contain"
        />
        <TextHeadingCom
          heading={'Change Password'}
          style={{marginTop: hp('10')}}
        />
        <Text
          style={{
            fontSize: hp('1.5'),
            color: 'gray',
            textAlign: 'center',
            marginTop: hp('2'),
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Text>
        <LoginInputComp
          value={oldPassword}
          onChangeText={oldPassword => updateState({oldPassword})}
          inputText="Password"
          placeholder="Enter Old Password"
          onFocus={() => handleInputFocus('oldPassword')}
          onBlur={() => handleInputBlur('oldPassword')}
          secureTextEntry={show ? false : true}
          eyeIconPress={handleClick}
          eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
          isFocused={isFocused.oldPassword}
          eyeIcon={true}
          style={{marginTop: hp('2')}}
        />
        <LoginInputComp
          value={newPassword}
          onChangeText={newPassword => updateState({newPassword})}
          inputText="Password"
          placeholder="Enter New Password"
          onFocus={() => handleInputFocus('newPassword')}
          onBlur={() => handleInputBlur('newPassword')}
          secureTextEntry={show ? false : true}
          eyeIconPress={handleClick}
          eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
          isFocused={isFocused.newPassword}
          eyeIcon={true}
          style={{marginTop: hp('2')}}
        />
        <LoginInputComp
          value={confirmPassword}
          onChangeText={confirmPassword => updateState({confirmPassword})}
          inputText="Password"
          placeholder="Confirm Password"
          onFocus={() => handleInputFocus('confirmPassword')}
          onBlur={() => handleInputBlur('confirmPassword')}
          secureTextEntry={show ? false : true}
          eyeIconPress={handleClick}
          eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
          isFocused={isFocused.confirmPassword}
          eyeIcon={true}
          style={{marginTop: hp('2')}}
        />

        <ButtonThemeComp
          onPress={() => navigation.navigate('OtpScreen')}
          text={'Reset'}
          style={{marginTop: hp('2')}}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordScreen;
