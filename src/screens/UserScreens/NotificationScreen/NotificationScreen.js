import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {NotificationComp} from '../../../components/NotificationComp/NotificationComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NotificationScreen = ({navigation}) => {
  const [notification, setNotification] = useState([
    {
      id: 1,
      image: require('../../../images/Towing.png'),
      text: 'Towing',
    },
    {
      id: 2,
      image: require('../../../images/Passenger.png'),
      text: 'Passenger Transfer',
    },
    {
      id: 3,
      image: require('../../../images/Fuel.png'),
      text: 'Refueling',
    },
    {
      id: 4,
      image: require('../../../images/Customer.png'),
      text: 'Customer Services',
    },
    {
      id: 5,
      image: require('../../../images/Permit.png'),
      text: 'Sailing Permit',
    },
    {
      id: 6,
      image: require('../../../images/Report.png'),
      text: 'Report Incidenet',
    },
    {
      id: 7,
      image: require('../../../images/Electrician.png'),
      text: 'Electrical Services',
    },
    {
      id: 8,
      image: require('../../../images/Mechanical.png'),
      text: 'Mechanical Services',
    },
    {
      id: 9,
      image: require('../../../images/Road.png'),
      text: 'Road Insurance',
    },
  ]);
  return (
    <View>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Notification'}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp('15')}}>
        <NotificationComp data={notification} />
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
