import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import StarRating from 'react-native-star-rating-widget';
import {color} from '../../../components/color';
import {globalStyles} from '../../../config/globalStyles';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
import TextInputWithTextCom from '../../../components/TextInputWithTextCom/TextInputWithTextCom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';

const PermitFormScreen = ({route, navigation}) => {
  const [checkRenderView, setcheckRenderView] = useState({
    ServicesRequestCompleted: false,
  });
  const {ServicesRequestCompleted} = checkRenderView;
  const updateState = data =>
    setcheckRenderView(() => ({...checkRenderView, ...data}));
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
            heading="Your Form has been Submitted!"
            style={{textAlign: 'center', fontWeight: '500'}}
          />
          <TextHeadingCom
            heading="Successfully!"
            style={{textAlign: 'center'}}
          />
          <View style={{alignItems: 'center'}}>
            <TextHeadingCom
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nulla aliquet malesuada morbi purus."
              style={{
                textAlign: 'center',
                color: color.textInputColor,
                width: wp('70'),
                marginBottom: hp('3'),
                fontWeight: '500',
                fontSize: hp('1.5'),
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  const DocumentView = props => {
    return (
      <View>
        <View style={{...styles.button}}>
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
          alignItems: 'center',
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
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Sailing Permit Form'}
      />
      <ScrollView contentContainerStyle={styles.Container}>
        <View
          style={{
            flex: 1,
            paddingBottom: hp('3'),
            justifyContent: 'space-evenly',
          }}>
          <TextInputWithTextCom
            placeholder={'Boat Number'}
            upperText={'Boat Number'}
            textInputstyle={{
              width: wp('80'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Boat Name'}
            upperText={'Boat Name'}
            textInputstyle={{
              width: wp('80'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Date of Expiry'}
            upperText={'Date of Expiry'}
            showIcon={true}
            iconName={'calendar-outline'}
            textInputstyle={{
              width: wp('80'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Boat Owner'}
            upperText={'Boat Owner'}
            textInputstyle={{
              width: wp('80'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Captain Name'}
            upperText={'Captain Name'}
            textInputstyle={{
              width: wp('80'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Phone'}
            upperText={'Phone Number'}
            textInputstyle={{
              width: wp('80'),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputWithTextCom
              placeholder={'D.O.Departure'}
              upperText={'D.O.Departure'}
              showIcon={true}
              iconName={'calendar-outline'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32')}}
            />
            <TextInputWithTextCom
              placeholder={'Time of Departure'}
              upperText={'Time of Departure'}
              style={{width: wp('43')}}
              showIcon={true}
              iconName={'ios-time-outline'}
              textInputstyle={{
                width: wp('32'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputWithTextCom
              placeholder={'Time of Arrival'}
              upperText={'Time of Arrival'}
              showIcon={true}
              iconName={'ios-time-outline'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32')}}
            />
            <TextInputWithTextCom
              placeholder={'Date of Arrival'}
              upperText={'Date of Arrival'}
              style={{width: wp('43')}}
              showIcon={true}
              iconName={'calendar-outline'}
              textInputstyle={{
                width: wp('32'),
              }}
            />
          </View>
          <TextInputWithTextCom
            placeholder={'Distination'}
            upperText={'Distination'}
            textInputstyle={{
              width: wp('80'),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputWithTextCom
              placeholder={'No of Passenger'}
              upperText={'No of Passenger'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32')}}
            />
            <TextInputWithTextCom
              placeholder={'No of Crew'}
              upperText={'No of Crew'}
              style={{width: wp('43')}}
              textInputstyle={{
                width: wp('32'),
              }}
            />
          </View>
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
            text="Submit"
            textStyle={{fontWeight: 'bold'}}
            onPress={() => updateState({ServicesRequestCompleted: true})}
            viewStyle={{
              width: wp('85'),
              marginTop: hp('2'),
              marginBottom: hp('2'),
            }}
          />
        </View>
      </ScrollView>
      {ServicesRequestCompleted && <ServicesRequestView />}
    </>
  );
};

export default PermitFormScreen;
