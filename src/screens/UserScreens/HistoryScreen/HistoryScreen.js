import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {styles} from './styles';

const HistoryScreen = () => {
  const [history, setHistory] = useState([
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
  ]);
  const HistoryView = () => {
    return (
      <View style={styles.mainView}>
        <View
          style={{
            width: wp('60'),
            height: hp('8'),
          }}>
          <TextHeadingCom
            style={{fontSize: hp('2.3')}}
            heading={'Anual Membership'}
          />
          <View style={styles.leftView}>
            <TextHeadingCom style={styles.smallText} heading={'Start Date'} />
            <TextHeadingCom style={styles.smallText} heading={'End Date'} />
          </View>
          <View style={styles.leftView}>
            <TextHeadingCom style={styles.smallText} heading={'23 Jun, 2021'} />
            <TextHeadingCom style={styles.smallText} heading={'23 Jun, 2021'} />
          </View>
        </View>
        <View style={styles.rightView}>
          <TextHeadingCom
            style={{color: color.lightBlueColor}}
            heading={'AED'}
          />
          <TextHeadingCom style={{fontSize: hp('2.5')}} heading={'2000'} />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <HistoryView />;
        }}
      />
    </View>
  );
};

export default HistoryScreen;
