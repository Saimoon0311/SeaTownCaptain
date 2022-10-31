import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {WeatherHomeComp} from '../../../components/WeatherHomeComp/WeatherHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import {BookingViewComp} from '../../../components/BookingViewComp/BookingViewComp';
import {ServicesCounterComp} from '../../../components/ServicesCounterComp/ServicesCounterComp';

const GuiderBookingScreen = ({navigation}) => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      image: require('../../../images/Towing.png'),
      text: 'Towing',
      innerImage: require('../../../images/TowingServices.png'),
      innerText: 'Towing Services',
      status: 'In Progress',
    },
    {
      id: 2,
      image: require('../../../images/Passenger.png'),
      text: 'Passenger Transfer',
      innerImage: require('../../../images/PassengerTranfer.png'),
      status: 'Completed',
    },
    {
      id: 3,
      image: require('../../../images/Fuel.png'),
      text: 'Refueling',
      innerImage: require('../../../images/RefullingServices.png'),
      status: 'Cancelled',
    },
    {
      id: 4,
      image: require('../../../images/Customer.png'),
      text: 'Customer Services',
      status: 'In Progress',
      innerImage: require('../../../images/RefullingServices.png'),
    },
    {
      id: 5,
      image: require('../../../images/Permit.png'),
      text: 'Sailing Permit',
      status: 'Cancelled',
      innerImage: require('../../../images/ElectricalServices.png'),
    },
    {
      id: 6,
      image: require('../../../images/Report.png'),
      text: 'Report Incidenet',
      status: 'Completed',
      innerImage: require('../../../images/ElectricalServices.png'),
    },
    {
      id: 7,
      image: require('../../../images/Electrician.png'),
      text: 'Electrical Services',
      innerImage: require('../../../images/ElectricalServices.png'),
      status: 'In Progress',
    },
    {
      id: 8,
      image: require('../../../images/Mechanical.png'),
      text: 'Mechanical Services',
      innerImage: require('../../../images/MechinacalServices.png'),
      status: 'In Progress',
    },
    {
      id: 9,
      image: require('../../../images/Road.png'),
      text: 'Road Insurance',
      status: 'In Progress',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
  ]);

  const [loading, setLoading] = useState(true);
  const navigates = item => {
    navigation.navigate('BookingDetailsScreen', {item: item});
  };
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        notificationPress={() => navigation.navigate('NotificationScreen')}
        heading={'Bookings'}
        notification={true}
        search={true}
        openDrawer={() => navigation.navigate('DrawerComp')}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp('2')}}>
        <View
          style={{
            flexDirection: 'row',
            width: wp('90'),
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginBottom: hp('1'),
          }}>
          <ServicesCounterComp status={'Total Bookings'} number={22} />
          <ServicesCounterComp status={'Completed'} number={13} />
          <ServicesCounterComp status={'Cancelled'} number={7} />
        </View>
        <BookingViewComp onPress={item => navigates(item)} data={bookings} />
      </ScrollView>
    </View>
  );
};

export default GuiderBookingScreen;
