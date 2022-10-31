import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {UserBookingViewComp} from '../../../components/UserBookingViewComp/UserBookingViewComp';
const BookingScreen = ({navigation}) => {
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
      status: 'Schedule',
    },
    {
      id: 4,
      image: require('../../../images/Customer.png'),
      text: 'Customer Services',
      status: 'Cancelled',
      innerImage: require('../../../images/RefullingServices.png'),
    },
    {
      id: 5,
      image: require('../../../images/Permit.png'),
      text: 'Sailing Permit',
      status: 'Schedule',
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
      status: 'Cancelled',
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
  const navigates = item => {
    navigation.navigate('UserBookingDetailsScreen', {item: item});
  };
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        notificationPress={() => navigation.navigate('NotificationScreen')}
        heading={'My Bookings'}
        notification={true}
        search={true}
        openDrawer={() => navigation.navigate('UserDrawerComp')}
      />
      <UserBookingViewComp onPress={item => navigates(item)} data={bookings} />
    </View>
  );
};

export default BookingScreen;
