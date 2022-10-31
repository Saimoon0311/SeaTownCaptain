import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';

const GuiderProfileScreen = ({navigation}) => {
  const ExperienceView = props => {
    return (
      <View>
        <View style={{...styles.button}}>
          <Image
            style={{...styles.image, width: wp('8'), height: hp('4')}}
            resizeMode="contain"
            source={require('../../../images/Group.png')}
          />
          <View>
            <Text style={{...styles.text}}>{props?.title}</Text>
            <Text style={{...styles.text, color: color.lightBlueColor}}>
              {props?.work}
            </Text>
          </View>
          <Text
            style={{
              ...styles.text,
              ...styles.yearText,
            }}>
            {props?.time}
          </Text>
        </View>
      </View>
    );
  };
  const DocumentView = props => {
    return (
      <View>
        <View style={{...styles.button, height: hp('8')}}>
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
  return (
    <>
      <HeaderComp
        editPress={() => navigation.navigate('UpadateProfileScreen')}
        heading={'Profile'}
        edit={true}
        openDrawer={() => navigation.navigate('DrawerComp')}
      />
      <ScrollView>
        <CircleImage
          image={require('../../../images/Rectangle4307.png')}
          styles={{
            width: Dimensions.get('window').width * 0.4,
            height: Dimensions.get('window').width * 0.4,
            alignSelf: 'center',
            marginTop: hp('2'),
          }}
        />
        <Text style={styles.captionText}>Caption</Text>
        <TextHeadingCom
          heading="Brandon Westervelt"
          style={{marginTop: hp('2'), textAlign: 'center'}}
        />
        <View style={styles.mileText}>
          <Ionicons
            name="location-outline"
            size={hp('2')}
            color={color.lightBlueColor}
          />
          <Text style={styles.dateTimeText}>7.5 mils</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Feather
            style={styles.image}
            name={'phone'}
            size={20}
            color={color.textPrimaryColor}
          />
          <Text style={{...styles.text}}>5537-334543-345</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            style={styles.image}
            name={'mail-outline'}
            size={20}
            color={color.textPrimaryColor}
          />
          <Text style={{...styles.text}}>alfoneso_vac@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather
            style={styles.image}
            name={'clock'}
            size={20}
            color={color.textPrimaryColor}
          />
          <Text style={{...styles.text}}>9AM - 5PM</Text>
        </TouchableOpacity>
        <TextHeadingCom
          heading="Experiences"
          style={{marginTop: hp('3'), marginLeft: wp('5')}}
        />
        <ExperienceView
          title="Al Suwaidi Marine"
          work="Boat Caption"
          time="2021 - 2022"
        />
        <ExperienceView
          title="Al Aweidha Marine Services"
          work="Boat Caption"
          time="2016 - 2022"
        />
        <TextHeadingCom
          heading="Document"
          style={{marginTop: hp('3'), marginLeft: wp('5')}}
        />
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
      </ScrollView>
    </>
  );
};

export default GuiderProfileScreen;
