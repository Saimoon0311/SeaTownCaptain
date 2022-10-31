import React, {useRef, useState} from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
// import Carousel from 'react-native-snap-carousel';
import Foundation from 'react-native-vector-icons/Foundation';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
import {styles} from './styles';

const PackagesScreen = ({navigation}) => {
  const isCarousel = useRef(null);
  //   const [packageDetails, setPackageDetails] = useState([
  //     {
  //       text: 'Starup to 5 m 600 AED',
  //     },
  //     {
  //       text: 'Additional Mile 750 AED',
  //     },
  //     {
  //       text: 'Mechanical Services 30 min 250 AED',
  //     },
  //     {
  //       text: 'Electrical Services 30 min 250 AED',
  //     },
  //     {
  //       text: 'Delivery of Fuel / Parts 100 AED Each',
  //     },
  //     {
  //       text: 'Passenger Transfer 100 AED each Mile',
  //     },
  //     {
  //       text: 'Passenger Transfer 100 AED each Mile For 2 Person',
  //     },
  //     {
  //       text: 'Aditional Passenger 80 AED',
  //     },
  //   ]);
  const nonMemberText = [
    {
      text: 'Starup to 5 m 600 AED',
    },
    {
      text: 'Additional Mile 750 AED',
    },
    {
      text: 'Mechanical Services 30 min 250 AED',
    },
    {
      text: 'Electrical Services 30 min 250 AED',
    },
    {
      text: 'Delivery of Fuel / Parts 100 AED Each',
    },
    {
      text: 'Passenger Transfer 100 AED each Mile',
    },
    {
      text: 'Passenger Transfer 100 AED each Mile For 2 Person',
    },
    {
      text: 'Aditional Passenger 80 AED',
    },
  ];
  const yearlyText = [
    {
      text: 'Starup to 5 m 600 AED',
    },
    {
      text: 'Additional Mile 750 AED',
    },
    {
      text: 'Mechanical Services 30 min 250 AED',
    },
    {
      text: 'Electrical Services 30 min 250 AED',
    },
    {
      text: 'Delivery of Fuel / Parts 100 AED Each',
    },
    {
      text: 'Passenger Transfer 100 AED each Mile',
    },
    {
      text: 'Passenger Transfer 100 AED each Mile For 2 Person',
    },
    {
      text: 'Aditional Passenger 80 AED',
    },
  ];
  const [packages, setPackages] = useState([
    {
      image: require('../../../images/bluePackage.png'),
      type: 'Non Member',
      text: nonMemberText,
      buttonColor: color.yellowTxtColor,
    },
    {
      image: require('../../../images/yellowPackge.png'),
      type: 'Yearly',
      text: yearlyText,
      buttonColor: 'white',
    },
  ]);
  const PackagesCard = props => {
    const {data} = props;
    return (
      <ImageBackground
        source={data.image}
        // resizeMode="contain"
        style={{...styles.imageBackgroundView, ...data.style}}>
        <TextHeadingCom heading="Our Prices" style={styles.priceText} />
        <TextHeadingCom
          heading={data.type}
          style={{color: color.yellowTxtColor, fontSize: hp('1.6')}}
        />
        <View style={styles.centerView}>
          {data.text.map(res => {
            return (
              <View style={styles.detailsView}>
                <Image
                  resizeMode="contain"
                  source={require('../../../images/check-circle-1.png')}
                />
                <Text numberOfLines={2} style={styles.detailsText}>
                  {res.text}
                </Text>
              </View>
            );
          })}
        </View>
        <CommonButtonComp
          onPress={() => navigation.navigate('SelectPaymentScreen')}
          text="Buy Now"
          textStyle={{
            color: 'black',
            fontWeight: 'bold',
          }}
          viewStyle={{
            ...styles.bookButton,
            backgroundColor: data.buttonColor,
          }}
        />
      </ImageBackground>
    );
    ('');
  };
  2;
  return (
    <View>
      {/* <Carousel
          disableVirtualization={true}
          data={[1, 2]}
          layout={'tinder'}
          useScrollView={true}
          ref={isCarousel}
          layoutCardOffset={'18'}
          contentContainerStyle={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            alignSelf: 'center',
          }}
          sliderWidth={wp('100')}
          itemWidth={wp('100')}
          itemHeight={hp('100')}
          renderItem={({item}) => {
            return (
              <View style={{alignSelf: 'center'}}>
                <PackagesCard data={item} />
              </View>
            );
        }}
        /> */}
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <PackagesCard data={packages[0]} />
        <PackagesCard data={packages[1]} />
      </ScrollView>
    </View>
  );
};

export default PackagesScreen;
