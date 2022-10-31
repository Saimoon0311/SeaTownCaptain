import React from 'react';
import {View, Text} from 'react-native';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import UserTopTabs from '../../../navigations/TopBarNavigation';

const MemberShipScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        notificationPress={() => navigation.navigate('NotificationScreen')}
        heading={'Membership Plane'}
        openDrawer={() => navigation.navigate('UserDrawerComp')}
      />
      <UserTopTabs />
    </View>
  );
};

export default MemberShipScreen;
