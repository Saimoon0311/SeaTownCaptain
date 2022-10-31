import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ApiGet, ApiPost, ApiPostFormData} from '../../../config/helperFunction';
import {CountryNameUrl, resendEmailUrl, SignUpUrl} from '../../../config/Urls';
import {styles} from './styles';
import {
  errorMessage,
  successMessage,
} from '../../../components/NotificationMessage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {BottomTextComp} from '../../../components/BottomTextComp/BottomTextComp';
import CheckBox from '@react-native-community/checkbox';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';

export default function SignUpScreen({navigation}) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(hp('45'));
  const [signUpUser, setSignUpUser] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    ConfirmPassword: '',
  });
  // sb-ktzwd14471324@personal.example.com
  // p)FUl>U3
  const [isFocused, setIsFocused] = useState({
    userName: false,
    email: false,
    password: false,
    phone: false,
    ConfirmPassword: false,
  });
  const [timerValue, setTimerValue] = useState(true);

  const [signUpCofirm, setSignUpConfirm] = useState(false);
  const [countryPicker, setCountryPicker] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(false);
  const [userId, setUserId] = useState('');
  const handleClick = () => setShow(!show);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const {userName, email, password, countryId, userImage, phone, userRole} =
    signUpUser;
  const updateState = data => setSignUpUser(prev => ({...prev, ...data}));

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
  const signUpFunction = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setLoading(true);
    if (
      userName != '' &&
      userName != null &&
      email != '' &&
      email != null &&
      password != '' &&
      password != null &&
      phone != null &&
      phone != '' &&
      reg.test(email) === true
    ) {
      var formdata = new FormData();
      formdata.append('userName', userName);
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('phone', Number(phone));
      ApiPostFormData(SignUpUrl, formdata).then(res => {
        if (res.status == 200) {
          const {id} = res.json.data;
          setLoading(false);
          setSignUpConfirm(true);
          setUserId(id);
        } else if (res.status == 401) {
          setLoading(false);
          errorMessage(res.json.message);
        } else {
          errorMessage('Network request failed.');
          setLoading(false);
        }
      });
    } else if (userImage.length == 0) {
      setLoading(false);
      errorMessage('Kindly select an image');
    } else {
      errorMessage('Plesae type correct information.');
      setLoading(false);
    }
  };
  const getAllCountryName = () => {
    ApiGet(CountryNameUrl).then(res => {
      if (res.status == 200) {
        setCountryPicker(res.json.data);
      } else {
        errorMessage(
          'Please Check Your Internet connection to get Countries Name.',
        );
      }
    });
  };

  const resendEmailFunction = () => {
    setLoading(true);
    ApiGet(resendEmailUrl + userId).then(res => {
      if (res.status == 200) {
        setTimer(false);
        successMessage('Email has been send');
        setLoading(false);
      } else {
        setLoading(false);
        errorMessage(
          "Please Check Your Internet connection to 'Resend Email' ",
        );
      }
    });
  };

  useEffect(() => {
    getAllCountryName();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(hp('60')); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(hp('45')); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const pickImagesFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          updateState({userImage: res?.assets});
        }
      },
    );
  };
  const pickImagefromCamera = () => {
    launchCamera(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          updateState({userImage: res?.assets});
        }
      },
    );
  };

  //TIMER FUNCTION

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../../images/Loginogo.png')}
          style={styles.topImage}
          resizeMode="contain"
        />
        <TextHeadingCom heading={'Sign Up'} style={{marginTop: hp('10')}} />
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
          value={userName}
          onChangeText={userName => updateState({userName})}
          inputText="Username"
          placeholder="User Name"
          onFocus={() => handleInputFocus('userName')}
          onBlur={() => handleInputBlur('userName')}
          isFocused={isFocused.userName}
        />
        <LoginInputComp
          value={phone}
          onChangeText={phone => updateState({phone})}
          inputText="Phone Number"
          placeholder="+1 254536"
          onFocus={() => handleInputFocus('phone')}
          onBlur={() => handleInputBlur('phone')}
          isFocused={isFocused.phone}
          keyboardType="number-pad"
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
        <LoginInputComp
          value={password}
          onChangeText={password => updateState({password})}
          inputText="Confirm Password"
          placeholder="Confirm password"
          onFocus={() => handleInputFocus('ConfirmPassword')}
          onBlur={() => handleInputBlur('ConfirmPassword')}
          secureTextEntry={show ? false : true}
          eyeIconPress={handleClick}
          eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
          isFocused={isFocused.ConfirmPassword}
          eyeIcon={true}
          style={{marginTop: hp('2')}}
        />
        <View style={styles.rememberView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.rememberText}>Accept Terms of Services</Text>
        </View>
        <ButtonThemeComp
          onPress={() => navigation.navigate('OtpScreen')}
          text={'Sign Up'}
          style={{marginTop: hp('2')}}
        />
      </ScrollView>
      <BottomTextComp
        onPress={() => navigation.navigate('LoginScreen')}
        note={"Don't have account ? "}
        heading={'Sign Up'}
      />
    </KeyboardAvoidingView>
  );
}
