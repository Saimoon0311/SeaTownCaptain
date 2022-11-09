import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {globalStyles} from '../../../config/globalStyles';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
const InvoiceScreen = ({navigation}) => {
  const [services, setServices] = useState([
    {
      id: 1,
      image: require('../../../images/Towing.png'),
      text: 'Towing',
      innerImage: require('../../../images/TowingServices.png'),
      innerText: 'Towing Services',
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      paid: true,
    },
    {
      id: 2,
      innerText: 'Passenger Transfer',

      text: 'Passenger Transfer',
      image: require('../../../images/Passenger.png'),
      innerImage: require('../../../images/PassengerTranfer.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      paid: false,
    },
    {
      id: 3,
      innerText: 'Refueling',

      image: require('../../../images/Fuel.png'),
      text: 'Refueling',
      innerImage: require('../../../images/RefullingServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      paid: false,
    },
    {
      id: 4,
      innerText: 'Electrical Services',

      image: require('../../../images/Electrician.png'),
      text: 'Electrical Services',
      innerImage: require('../../../images/ElectricalServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      paid: true,
      // ProName: 'Our Professional',
      Professional: [
        {
          id: 1,
          profession: 'electrician',
          name: 'Emerson Bator',
          rating: 4.5,
          image: require('../../../images/1.png'),
        },
        {
          id: 2,
          profession: 'electrician',
          name: 'Terry Dorwat',
          rating: 4.5,
          image: require('../../../images/2.png'),
        },
        {
          id: 3,
          profession: 'electrician',
          name: 'Nolan David',
          rating: 4.5,
          image: require('../../../images/3.png'),
        },
      ],
    },
    {
      id: 5,
      innerText: 'Mechanical Services',
      image: require('../../../images/Mechanical.png'),
      text: 'Mechanical Services',
      innerImage: require('../../../images/MechinacalServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      paid: false,
      Professional: [
        {
          id: 1,
          profession: 'electrician',
          name: 'Emerson Bator',
          rating: 4.5,
          image: require('../../../images/1.png'),
        },
        {
          id: 2,
          profession: 'electrician',
          name: 'Terry Dorwat',
          rating: 4.5,
          image: require('../../../images/2.png'),
        },
        {
          id: 3,
          profession: 'electrician',
          name: 'Nolan David',
          rating: 4.5,
          image: require('../../../images/3.png'),
        },
      ],
    },
    {
      id: 6,

      rating: 4,
      image: require('../../../images/Road.png'),
      innerText: 'Road Insurance',
      innerImage: require('../../../images/RoadInsurance.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      paid: false,
      text: 'Road Insurance',
    },
    {
      id: 7,
      image: require('../../../images/Customer.png'),
      text: 'Customer Services',
      permitForm: true,
      paid: true,
    },
    {
      id: 8,
      paid: true,
      image: require('../../../images/Permit.png'),
      text: 'Sailing Permit',
      innerImage: require('../../../images/MechinacalServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
    },
    {
      id: 9,
      image: require('../../../images/Report.png'),
      text: 'Report Incident',
      paid: true,
    },
  ]);
  const InvoiceComponent = ({getData}) => {
    return (
      <View style={styles.topView}>
        <View
          style={{
            flexDirection: 'row',
            marginRight: wp('8'),
          }}>
          <Image
            resizeMode="contain"
            style={{
              alignSelf: 'center',
              width: wp('20'),
              height: hp('8'),
              marginleft: wp('3'),
            }}
            source={require('../../../images/5.png')}
          />
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: color.black,
                fontWeight: 'bold',
                fontSize: hp('2.1'),
                marginRight: hp('0.5'),
                marginBottom: hp('0.3'),
              }}>
              #00068
            </Text>
            <Text
              style={{
                color: color.textInputColor,
                marginRight: hp('0.5'),
              }}>
              21 feb, 2022
            </Text>
          </View>
        </View>

        <View>
          {getData.paid == true ? (
            <View
              style={{
                ...styles.paymentView,
                width: wp('18'),
                backgroundColor: color.paidColor,
              }}>
              <Text
                style={{
                  color: color.white,
                  fontSize: hp('1.6'),
                  textAlign: 'center',
                }}>
                Paid
              </Text>
            </View>
          ) : (
            <View style={{...styles.paymentView}}>
              <Text
                style={{
                  color: color.white,
                  textAlign: 'center',
                  fontSize: hp('1.6'),
                }}>
                Payment Due
              </Text>
            </View>
          )}
          <Text
            style={{
              ...globalStyles.globalTextStyles4,
              fontSize: hp('2.2'),
              textAlign: 'center',
            }}>
            AED 750
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        openDrawer={() => navigation.navigate('UserDrawerComp')}
        heading={'Invoices'}
      />
      <FlatList
        data={services}
        keyExtractor={(item, index) => index.toString()}
        style={{}}
        contentContainerStyle={styles.flatListView}
        renderItem={({item}) => {
          return <InvoiceComponent getData={item} />;
        }}
      />
    </View>
  );
};

export default InvoiceScreen;
