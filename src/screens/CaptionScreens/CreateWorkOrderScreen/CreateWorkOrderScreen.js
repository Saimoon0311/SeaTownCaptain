import React, {useState} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import TextButtonComp from '../../../components/TextButtonComp/TextButtonComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
const CreateWorkOrderScreen = ({navigation}) => {
  const [checkRenderView, setcheckRenderView] = useState({
    TrackViewState: false,
  });
  const {TrackViewState} = checkRenderView;
  const updateState = data =>
    setcheckRenderView(() => ({...checkRenderView, ...data}));
  const ReqiuredView = props => {
    var width = props.width ?? '88';
    return (
      <View>
        <Text style={styles.selTxt}>{props?.text}</Text>
        <View style={styles.txtInput}>
          <View style={{...styles.disContainer, width: wp(width)}}>
            <TextInput
              style={{
                color: 'black',
                flex: 1,
              }}
              placeholder={props?.placeholder}
              placeholderTextColor={color.textImagebackgroundColor}
            />
            {props?.iconNotShow != true && (
              <Ionicons
                size={hp('2')}
                style={{textAlign: 'right'}}
                name="chevron-down-sharp"
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  const ServicesRequestView = () => {
    return (
      <View style={styles.trackMainView}>
        <View style={{...styles.trackInnerView}}>
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
            source={require('../../../images/yellowTick.png')}
            resizeMode={'contain'}
            style={{alignSelf: 'center'}}
          />
          <TextHeadingCom
            heading="Your Work Order has been Submit to Admin!"
            style={{
              marginTop: hp('5'),
              width: wp('70'),

              textAlign: 'center',
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading="Create Work Order"
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: color.white,
        }}
      >
        <View style={{paddingBottom: hp('3')}}>
          <View style={styles.detailsView}>
            <View
              style={{
                width: wp('40'),
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.leftText}>Booking ID</Text>
              <Text style={styles.leftText}>Date</Text>
              <Text style={styles.leftText}>Bill to</Text>
            </View>
            <View
              style={{
                width: wp('40'),
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Text style={styles.rightText}>#00068</Text>
              <Text style={styles.rightText}>13 Dec 2022</Text>
              <Text style={styles.rightText}>Alfonso Vaccaro</Text>
            </View>
          </View>
          <View style={styles.mainViewContainer}>
            <ReqiuredView
              width={'40'}
              placeholder={'0.1 mile'}
              text={'Distance*'}
            />

            <ReqiuredView
              width={'40'}
              iconNotShow={true}
              placeholder={'2 hrs 45 m'}
              text={'Time Consumed*'}
            />
          </View>
        </View>
        <View style={styles.midContainer}>
          <ReqiuredView
            iconNotShow={false}
            placeholder={'Delivery of Feuls'}
            text={'Select Services'}
          />
          <ReqiuredView placeholder={'20 ltr'} text={'Qty'} />
        </View>
        <Divider style={styles.dividerView} />
        <View style={styles.midContainer}>
          <ReqiuredView
            placeholder={'Electric Services'}
            text={'Select Services'}
          />
        </View>
        <View style={styles.lastView}>
          <TextButtonComp
            onPress={() => console.log('AddSERVICES')}
            text={'Add Services '}
            name={'plus'}
          />
          <ButtonThemeComp
            onPress={() => updateState({TrackViewState: true})}
            style={{marginTop: wp('5')}}
            text={'Send To Admin'}
          />
        </View>
      </ScrollView>
      {TrackViewState && ServicesRequestView()}
    </>
  );
};

export default CreateWorkOrderScreen;
