import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens/UserScreens/index';
import UserBottomnavigation from './UserBottomnavigation';
import {useSelector} from 'react-redux';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'; //
import Animated, {interpolate, Value} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/Home';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Feather from 'react-native-vector-icons/Feather';
import CaptionBottomNavigation from './CaptionBottomNavigation';
import {captionScreens} from '../screens/CaptionScreens/index';
import Drawernavigation from './Drawernavigation';
import ChangePasswordScreen from '../screens/ChangePassword/ChangePassword';
import TermOfServices from '../screens/TermOfServices';
import DrawerComp from '../components/DrawerComp/DrawerComp';
import UserTopTabs from './TopBarNavigation';
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator(); //Bilal

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItem
        label="Home"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="About"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('About')}
      />
      <DrawerItem
        label="Settings"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
};

const StackNavigatior = ({style, navigation}) => {
  const {userData} = useSelector(state => state.userData);
  return (
    // <Animated.View>
    // <Animated.View style={{flex: 1, backgroundColor: 'red', colors: 'yellow'}}>
    // {/* // <Animated.View style={[styles.stack, style]}> */}
    // <View style={{backgroundColor: 'green'}}>
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        // animation: 'slide_from_left',
        headerShown: false,
        // contentStyle: {
        // width
        // },
        // headerLeft: () => (
        //   <TouchableOpacity onPress={navigation.openDrawer}>
        //     <Image
        //       resizeMode="contain"
        //       source={require('../images/Menu.png')}
        //       style={styles.menu}
        //     />
        //   </TouchableOpacity>
        // ),
      }}
    >
      {/* {userData?.data?.user_role == 0 ? (
          <>
            <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
            <Stack.Screen
              name="DeleteAccountScreen"
              component={screens.DeleteAccountScreen}
            />
          </>
        ) : userData?.data?.user_role == 1 ? (
          <Stack.Screen
            name="GuiderBottomNavigation"
            component={GuiderBottomNavigation}
          />
        ) : ( */}
      <Stack.Screen
        name="CaptainLoginScreen"
        component={captionScreens.CaptainLoginScreen}
      />
      <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />

      <Stack.Screen name="SignUpScreen" component={screens.SignUpScreen} />
      <Stack.Screen name="ForgetScreen" component={screens.ForgetScreen} />
      <Stack.Screen name="ProfileScreen" component={screens.ProfileScreen} />
      <Stack.Screen
        name="UpadateProfileScreen"
        component={screens.UpadateProfileScreen}
      />
      <Stack.Screen
        name="UserBookingDetailsScreen"
        component={screens.UserBookingDetailsScreen}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={screens.ResetPasswordScreen}
      />
      <Stack.Screen name="OtpScreen" component={screens.OtpScreen} />
      {/* <Stack.Screen name="MybottomTabs" component={MybottomTabs} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PrivacyPolicy" component={screens.PrivacyPolicy} />
      <Stack.Screen
        name="PermitFormScreen"
        component={screens.PermitFormScreen}
      />
      <Stack.Screen
        name="ServicesDetailsScreen"
        component={screens.ServicesDetailsScreen}
      />
      <Stack.Screen
        name="SelectPaymentScreen"
        component={screens.SelectPaymentScreen}
      />
      <Stack.Screen
        name="UserBottomnavigation"
        component={UserBottomnavigation}
      />
      <Stack.Screen name="UserTopTabs" component={UserTopTabs} />
      <Stack.Screen
        options={{
          animation: 'none',
        }}
        name="DrawerComp"
        component={DrawerComp}
      />
      <Stack.Screen
        options={{
          animation: 'none',
        }}
        name="UserDrawerComp"
        component={screens.UserDrawerComp}
      />
      <Stack.Screen
        name="CaptionBottomNavigation"
        component={CaptionBottomNavigation}
      />
      <Stack.Screen
        name="WeatherScreen"
        component={captionScreens.WeatherScreen}
      />
      <Stack.Screen name="TermOfServices" component={TermOfServices} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={screens.NotificationScreen}
      />
      <Stack.Screen name="Drawernavigation" component={Drawernavigation} />
      <Stack.Screen
        name="BookingDetailsScreen"
        component={captionScreens.BookingDetailsScreen}
      />
      <Stack.Screen
        name="RequestOfServices"
        component={screens.RequestOfServices}
      />
      {/* <Stack.Screen
        name="UpadateProfileScreen"
        component={captionScreens.UpadateProfileScreen}
      /> */}
      <Stack.Screen
        name="CreateWorkOrderScreen"
        component={captionScreens.CreateWorkOrderScreen}
      />
    </Stack.Navigator>
    // {/* </View> */}
    // </Animated.View>
  );
};
export default StackNavigatior;
function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            {backgroundColor: '#fff2df', width: width, height: width},
          ]}
        >
          <>
            <View
              style={[styles.circleContainer, {backgroundColor: '#FFC56F'}]}
            >
              <Feather travel name="briefcase" size={25} color="#fbae41" />
              <DrawerItem
                label="Screen1"
                labelStyle={{color: '#fbae41', fontSize: 10}}
                onPress={() => {
                  props.navigation.navigate('Screen1');
                }}
              />
            </View>
          </>
          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{color: '#609806'}}
            onPress={() => {
              props.navigation.navigate('Screen1');
            }}
          />
        </View>
        <View
          style={[
            styles.menuItemsCard,
            {backgroundColor: '#EFFFD5', width: width, height: width},
          ]}
        >
          <View style={[styles.circleContainer, {backgroundColor: '#b5ff39'}]}>
            <Feather Medical name="briefcase" size={25} color="#609806" />
          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{color: '#609806'}}
            onPress={() => {
              props.navigation.navigate('StackNav');
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
// const Drawernavigation = () => {
//   const [progress, setProgress] = useState(new Animated.Value(0));
//   console.log(1002, progress);
//   const scale = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.8],
//   });
//   const borderRadius = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 10],
//   });
//   const animatedStyle = {borderRadius, transform: [{scale}]};
//   return (
//     <LinearGradient style={styles.container} colors={['#d303fc', '#0384fc']}>
//       <Drawer.Navigator
//         backBehavior="none"
//         initialRouteName="Home"
//         drawerType="slide"
//         overlayColor="transparent"
//         drawerStyle={styles.drawerStyles}
//         contentContainerStyle={styles.container}
//         screenOptions={{
//           headerShown: false,
//         }}
//         drawerContentOptions={{
//           activeBackgroundColor: 'green',
//           activeTintColor: 'white',
//           inactiveTintColor: 'white',
//         }}
//         sceneContainerStyle={styles.scene}
//         drawerContent={props => {
//           setProgress(props.progress);
//           // return <CustomDrawerContent {...props} />;
//           return <DrawerContent {...props} />;
//         }}>
//         <Drawer.Screen name="UserBottomnavigation">
//           {props => <UserBottomnavigation style={animatedStyle} />}
//         </Drawer.Screen>
//       </Drawer.Navigator>
//     </LinearGradient>
//   );
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dffc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {
    flex: 1,
    width: '50%',
    backgroundColor: 'transparent',
    color: 'black',
  },
  menu: {
    width: 38,
    height: 12,
    // margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});
