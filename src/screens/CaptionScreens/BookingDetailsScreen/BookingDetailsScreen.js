import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../../../components/color';
import {styles} from './styles';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
import StarRating from 'react-native-star-rating-widget';
import {ActionButtonComp} from '../../../components/ActionButtonComp/ActionButtonComp';
import CheckBox from '@react-native-community/checkbox';

const BookingDetailsScreen = ({route, navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [number, onChangeNumber] = React.useState(null);

  const item = route.params.item;
  const [checkRenderView, setcheckRenderView] = useState({
    TrackViewState: false,
    ServicesRequestCompleted: false,
    BookingCancellReason: false,
  });
  const {TrackViewState, ServicesRequestCompleted, BookingCancellReason} =
    checkRenderView;
  const updateState = data =>
    setcheckRenderView(() => ({...checkRenderView, ...data}));

  const CoordenatesView = props => {
    return (
      <View style={{...styles.coordenatesView, ...props?.style}}>
        <Ionicons
          name="ios-locate-outline"
          color={color.textPrimaryColor}
          size={hp('2')}
        />
        <Text style={styles.leftText}>{props?.coordArea}</Text>
        <Text style={styles.rightText}>{props?.coordenates}</Text>
      </View>
    );
  };
  const InProgressView = () => {
    return (
      <View>
        <TextHeadingCom
          heading="User Details"
          style={{
            marginTop: hp('6'),
            marginLeft: hp('2.5'),
            fontWeight: '600',
          }}
        />
        <View style={{...styles.userView}}>
          <CircleImage
            styles={{
              width: Dimensions.get('window').width * 0.12,
              height: Dimensions.get('window').width * 0.12,
            }}
            image={item?.innerImage}
          />
          <View>
            <TextHeadingCom
              heading="Jaylon Konsgraad"
              style={{
                marginLeft: hp('1'),
                fontWeight: '500',
                fontSize: hp('1.8'),
              }}
            />
            <Text
              style={{
                color: color.themeColorDark,
                marginLeft: hp('1'),
                fontSize: hp('1.7'),
              }}>
              35.5 miles away
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp('43'),
              marginLeft: hp('1'),
            }}>
            <ActionButtonComp image={require('../../../images/Vector.png')} />
            <ActionButtonComp image={require('../../../images/Chat.png')} />
            <ActionButtonComp image={require('../../../images/Call.png')} />
          </View>
        </View>
        <View style={styles.progressView}>
          <CommonButtonComp
            viewStyle={{backgroundColor: '#F3D2D2'}}
            textStyle={{color: 'red'}}
            text={'Cancel'}
            onPress={() => updateState({BookingCancellReason: true})}
          />
          <CommonButtonComp
            viewStyle={{backgroundColor: color.alertBackgroundColor}}
            textStyle={{color: 'white'}}
            text={'Mark as completed'}
            onPress={() => updateState({ServicesRequestCompleted: true})}
          />
        </View>
      </View>
    );
  };
  const ReviewView = () => {
    return (
      <View style={{width: wp('90'), alignSelf: 'center', marginTop: hp('6')}}>
        <TextHeadingCom
          heading="Reviews"
          style={{
            // marginLeft: hp('1'),
            fontWeight: '500',
          }}
        />
        <View style={styles.userView}>
          <CircleImage
            styles={{
              width: Dimensions.get('window').width * 0.12,
              height: Dimensions.get('window').width * 0.12,
            }}
            image={item?.innerImage}
          />
          <View>
            <TextHeadingCom
              heading="Jaylon Konsgraad"
              style={{
                marginLeft: hp('1'),
                fontWeight: '500',
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <StarRating
                rating={3.5}
                maxStars={5}
                color={color.yellowTxtColor}
                starSize={wp('4.5')}
                enableSwiping={false}
                onChange={() => console.log(32)}
              />
              <Text style={{color: color.lightBlueColor, fontSize: hp('1.5')}}>
                2 week ago
              </Text>
            </View>
          </View>
        </View>
        <Text style={{...styles.messageText, color: 'black'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
    );
  };
  const CompletedView = () => {
    return (
      <View>
        <UserDetailsView />
        <ReviewView />
        <CommonButtonComp
          text="Create Work Order"
          viewStyle={{width: wp('90'), marginTop: hp('3')}}
          onPress={() => navigation.navigate('CreateWorkOrderScreen')}
        />
      </View>
    );
  };
  const CancellationView = () => {
    return (
      <>
        <UserDetailsView />
        <View
          style={{width: wp('90'), alignSelf: 'center', marginTop: hp('2')}}>
          <TextHeadingCom
            heading="Cancellation Reason"
            style={{
              fontWeight: 'normal',
              fontSize: hp('1.8'),
            }}
          />
          <TextHeadingCom
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            style={{
              fontWeight: 'normal',
              marginTop: hp('1'),
              color: 'red',
              fontSize: hp('1.5'),
            }}
          />
        </View>
      </>
    );
  };
  const ScheduleView = () => {
    return (
      <View>
        <UserDetailsView />
        <CommonButtonComp
          text="Start"
          viewStyle={{width: wp('90'), marginTop: hp('3')}}
          onPress={() => updateState({TrackViewState: true})}
        />
      </View>
    );
  };
  const TrackView = () => {
    return (
      <View style={styles.trackMainView}>
        <View style={styles.trackInnerView}>
          <Ionicons
            name="close-sharp"
            color={color.lightBlueColor}
            size={hp('3')}
            onPress={() => updateState({TrackViewState: false})}
            style={{
              alignSelf: 'flex-end',
              marginRight: wp('2'),
            }}
          />
          <Image
            source={require('../../../images/locationImage.png')}
            resizeMode={'contain'}
            style={{alignSelf: 'center'}}
          />
          <CommonButtonComp
            onPress={() => updateState({TrackViewState: false})}
            viewStyle={{width: wp('70')}}
            text={'Track User'}
          />
        </View>
      </View>
    );
  };
  const ServicesRequestView = () => {
    return (
      <View style={styles.trackMainView}>
        <View style={{...styles.trackInnerView, height: hp('40')}}>
          <Ionicons
            name="close-sharp"
            color={color.lightBlueColor}
            size={hp('3')}
            onPress={() => updateState({ServicesRequestCompleted: false})}
            style={{
              alignSelf: 'flex-end',
              marginRight: wp('2'),
            }}
          />
          <Image
            source={require('../../../images/yellowTick.png')}
            resizeMode={'contain'}
            style={{alignSelf: 'center'}}
          />
          <TextHeadingCom
            heading="Your Service Request has been Completed!"
            style={{textAlign: 'center'}}
          />
          <CommonButtonComp
            onPress={() => {
              updateState({ServicesRequestCompleted: false});
              navigation.navigate('CreateWorkOrderScreen');
            }}
            viewStyle={{width: wp('70'), marginBottom: hp('2')}}
            text={'Create Work Order'}
          />
        </View>
      </View>
    );
  };
  const BookingCancellReasonView = () => {
    return (
      <View style={styles.trackMainView}>
        <View style={{...styles.trackInnerView, height: hp('60')}}>
          <View style={styles.centerViewTopText}>
            <TextHeadingCom
              style={{
                fontSize: hp('1.9'),
                width: wp('60'),
                paddingLeft: wp('3'),
              }}
              heading="Select or type your reason for booking cancellation"
            />
            <Ionicons
              name="close-sharp"
              color={color.lightBlueColor}
              size={hp('3')}
              onPress={() => updateState({BookingCancellReason: false})}
              style={{
                marginRight: wp('2'),
              }}
            />
          </View>
          <View
            style={{
              height: hp('15'),
              justifyContent: 'space-between',
            }}>
            <View style={styles.rememberView}>
              <CheckBox
                tintColors="red"
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.rememberText}>Unavailable</Text>
            </View>
            <View style={styles.rememberView}>
              <CheckBox
                tintColors="red"
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.rememberText}>Transport Malfunction</Text>
            </View>
            <View style={styles.rememberView}>
              <CheckBox
                tintColors="red"
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.rememberText}>Weather Condition</Text>
            </View>
          </View>
          <View style={styles.input}>
            <TextInput
              multiline
              style={{
                paddingTop: hp('-3'),
                color: 'black',
                alignSelf: 'flex-start',
                marginTop: hp('-1'),
                marginLeft: wp('2'),
              }}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Type your message"
              keyboardType="numeric"
            />
          </View>

          {/* <Text
            style={{
              textAlign: 'right',
              marginTop: hp('0.5'),
              color: color.themeColorDark,
            }}>
            0/500
          </Text> */}
          <CommonButtonComp
            onPress={() => {
              updateState({BookingCancellReason: false});
            }}
            viewStyle={{width: wp('70')}}
            text={'Submit'}
          />
        </View>
      </View>
    );
  };
  const UserDetailsView = () => {
    return (
      <>
        <TextHeadingCom
          heading="User Details"
          style={{
            marginTop: hp('6'),
            marginLeft: hp('2.5'),
            fontWeight: '600',
          }}
        />
        <View style={styles.userView}>
          <CircleImage
            styles={{
              width: Dimensions.get('window').width * 0.12,
              height: Dimensions.get('window').width * 0.12,
            }}
            image={item?.innerImage}
          />
          <TextHeadingCom
            heading="Jaylon Konsgraad"
            style={{
              marginLeft: hp('1'),
              fontWeight: '500',
            }}
          />
        </View>
      </>
    );
  };
  const checkStatus = {
    Completed: CompletedView(),
    'In Progress': InProgressView(),
    Cancelled: CancellationView(),
    Schedule: ScheduleView(),
  };
  const CheckStatus = status => {
    return checkStatus[status];
  };
  let statusValue = {
    Completed: 'green',
    'In Progress': color.textPrimaryColor,
    Cancelled: 'red',
    Schedule: color.yellowTxtColor,
  };

  const checkStatusValue = status => {
    return statusValue[status];
  };
  return (
    <View>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Services Request'}
        statusColor={checkStatusValue(item.status)}
        Status={item?.status}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp('20')}}>
        <Image
          source={item?.innerImage}
          resizeMode="contain"
          style={styles.banner}
        />
        <View style={styles.headingView}>
          <View style={{width: wp('65')}}>
            <Text style={styles.issueText}>Runing out of Gas from ship</Text>
            <View style={styles.dateTimeView}>
              <Ionicons
                name="location-outline"
                size={hp('2')}
                color={color.lightBlueColor}
              />
              <Text style={styles.dateTimeText}>7.5 mils</Text>
              <Ionicons
                name="calendar-outline"
                size={hp('2')}
                color={color.lightBlueColor}
              />
              <Text style={styles.dateTimeText}>21 feb 2022</Text>
              <Ionicons
                name="md-stopwatch-outline"
                size={hp('2')}
                color={color.lightBlueColor}
              />
              <Text style={styles.dateTimeText}>12 : 32 AM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.priceButton}>
            <Text
              style={{color: 'white', fontWeight: 'bold', fontSize: hp('1.6')}}>
              AED 500
            </Text>
          </TouchableOpacity>
        </View>
        <CoordenatesView
          style={{marginTop: hp('6')}}
          coordArea={'North Coordinates'}
          coordenates={"30°00'0.00' N"}
        />
        <CoordenatesView
          coordArea={'East Coordinates'}
          coordenates={"125°00'0.00' E"}
        />
        <TextHeadingCom
          heading="Message"
          style={{
            marginTop: hp('6'),
            marginLeft: hp('2.5'),
            fontWeight: '600',
          }}
        />
        <Text style={styles.messageText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu praesent
          magna quisque quisque. Etiam eu quis mattis mus accumsan varius
          egestas hendrerit vitae.
        </Text>
        {CheckStatus(item.status)}
        {/* <CancellationView /> */}
      </ScrollView>

      {TrackViewState && <TrackView />}
      {ServicesRequestCompleted && <ServicesRequestView />}
      {BookingCancellReason && <BookingCancellReasonView />}
    </View>
  );
};

export default BookingDetailsScreen;
