import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
  useWindowDimensions,
  Easing,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {stackScreens} from './services';
import CustomDrawer from './CustomDrawer';
import Screen from './Screen';
import UserBottomnavigation from './UserBottomnavigation';
import HomeScreen from '../screens/UserScreens/HomeScreen/HomeScreen';
import CaptionBottomNavigation from './CaptionBottomNavigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../components/color';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const {interpolate, Extrapolate} = Animated;

const DrawerContent = props => {
  const [iconColor, setIconColor] = useState('white');
  setTimeout(() => {
    setIconColor(color.yellowTxtColor);
  }, 3000);
  const isDrawerOpen = useDrawerStatus() === 'open';
  const animationProgress = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isDrawerOpen]);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1}}
      scrollEnabled={false}
    >
      {isDrawerOpen == true && (
        <Lottie
          autoPlay
          loop={false}
          // progress={animationProgress.current}
          style={{flex: 1, height: hp('100'), position: 'absolute'}}
          source={require('../images/78293-water-fills-square-progress-bar.json')}
        />
      )}
      <Text
        style={{
          fontSize: hp('5'),
          marginLeft: wp('5'),
          color: 'white',
          marginTop: hp('2'),
        }}
      >
        Menu
      </Text>
      <View
        style={{
          justifyContent: 'space-between',
          height: hp('85'),
        }}
      >
        <View style={{marginTop: hp('5'), marginLeft: wp('2')}}>
          <DrawerItem
            icon={({focused, size}) => (
              <Ionicons
                name="ios-stopwatch-outline"
                size={size}
                color={iconColor}
              />
            )}
            style={{color: 'white'}}
            label="Availability"
            labelStyle={styles.drawerLblStyle}
            onPress={() => console.log('6789')}
          />
          <DrawerItem
            icon={({focused, size}) => (
              <Ionicons
                name="lock-closed-outline"
                size={size}
                color={iconColor}
              />
            )}
            label="Change Password"
            labelStyle={styles.drawerLblStyle}
            onPress={() => {
              props.navigation.closeDrawer(),
                props.navigation.navigate('ChangePasswordScreen');
            }}
          />
          <DrawerItem
            icon={({focused, size}) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={iconColor}
              />
            )}
            label="Notification"
            labelStyle={styles.drawerLblStyle}
            onPress={() => {
              props.navigation.closeDrawer(),
                props.navigation.navigate('NotificationScreen');
            }}
          />
          <DrawerItem
            icon={({focused, size}) => (
              <MaterialIcons name="event-note" size={size} color={iconColor} />
            )}
            label="Terms of Service"
            labelStyle={styles.drawerLblStyle}
            onPress={() => {
              props.navigation.closeDrawer(),
                props.navigation.navigate('TermOfServices');
            }}
          />
          <DrawerItem
            icon={({focused, size}) => (
              <MaterialIcons name="event-note" size={size} color={iconColor} />
            )}
            label="Privacy Policy"
            labelStyle={styles.drawerLblStyle}
            onPress={() => {
              props.navigation.closeDrawer(),
                props.navigation.navigate('PrivacyPolicy');
            }}
          />
        </View>
        <DrawerItem
          icon={({focused, size}) => (
            <Ionicons name="log-in-outline" size={size} color={iconColor} />
          )}
          style={{
            // backgroundColor: 'green',
            bottom: hp('0'),
            marginLeft: wp('5'),
          }}
          label="Logout"
          labelStyle={styles.drawerLblStyle}
          onPress={() => {
            props.navigation.closeDrawer(),
              props.navigation.navigate('LoginScreen');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};
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

const Drawernavigation = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  console.log(1002, progress);
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <LinearGradient style={styles.container} colors={['#d303fc', '#0384fc']}>
      <Drawer.Navigator
        backBehavior="none"
        initialRouteName="Home"
        drawerType="slide"
        overlayColor="green"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={styles.container}
        screenOptions={{
          headerShown: false,
        }}
        drawerContentOptions={{
          activeBackgroundColor: 'green',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={styles.scene}
        drawerContent={props => {
          setProgress(props.progress);
          // return <CustomDrawerContent {...props} />;
          return (
            <View style={{flex: 1}}>
              <DrawerContent {...props} />
            </View>
          );
        }}
      >
        <Drawer.Screen name="CaptionBottomNavigation">
          {props => <CaptionBottomNavigation />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
// function Drawernavigation() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         {/* <Drawer.Screen name="Notifications" component={} /> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
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
    shadowColor: '#fffff',
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
    color: 'yellow',
  },
  menu: {
    width: 38,
    height: 12,
    // margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: hp('2'),
    color: 'white',
  },
});

export default Drawernavigation;
