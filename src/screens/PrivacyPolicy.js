import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrivacyPageComponents from '../components/PrivacyPageComponents/PrivacyPageComponents';
const PrivacyPolicy = ({navigation}) => {
  return (
    <>
      <PrivacyPageComponents
        onPresss={() => navigation.goBack()}
        text={'Privacy Policy'}
        date={'Updated on May 25, 2022'}
        des={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula elit viverra duis eu mollis a. Nullam faucibus commodo vel quisvelit. At purus vitae feugiat lectus. Quisque quisque porttitor eros mi ac consequat senectus nunc, eget. Faucibus potenti adipiscing in   sit. Enim eu scelerisque aliquet porttitor vestibulum ultricies    quis. Tempor tristique parturient velit amet pharetra ullamcorper et sed. Cursus ipsum faucibus at egestas. Lacus morbi euismod consectetur amet viverra convallis. Viverra amet, tristique sed sed. Varius iaculis duis ac in proin ornare tincidunt elit egestas. Quis vel senectus nulla quis. Sed metus donec odio mattis sed turpis diam odio. Porttitor arcu tincidunt amet amet. Dignissim commodo sed sed sodales. Eu, enim nec eros morbi. Eget ullamcorper adipiscing posuere diam est nec. Eu amet eu amet, orci enim augue massa ligula.
`}
      />
    </>
  );
};

export default PrivacyPolicy;
