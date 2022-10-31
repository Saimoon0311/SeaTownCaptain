import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import SkeletonContent from 'react-native-skeleton-content';
import {styles} from './styles';

export const UserHomeServicesComp = props => {
  const RederView = prop => {
    const {data} = prop;
    return (
      <TouchableOpacity
        onPress={() => props?.onPress(data)}
        style={{
          ...styles.touchView,
          backgroundColor: data?.id == 2 ? 'yellow' : 'white',
        }}>
        <Image
          source={data?.image}
          resizeMode="contain"
          style={styles.innerImage}
        />
        <Text style={styles.innerText}>{data?.text}</Text>
      </TouchableOpacity>
    );
  };
  const rederView = () => {
    // const {data} = props;
    return <TouchableOpacity style={{...styles.touchView}}></TouchableOpacity>;
  };
  const LoadingView = () => {
    return (
      <SkeletonContent
        containerStyle={{
          ...styles.flatListView,
          flexDirection: 'row',
          display: 'flex',
          flexWrap: 'wrap',
        }}
        animationType="pulse"
        isLoading={props.isloading}
        layout={[
          {...styles.touchView},
          {...styles.touchView},
          {...styles.touchView},
          {...styles.touchView},
          {...styles.touchView},
          {...styles.touchView},
          {...styles.touchView},
          {...styles.touchView},
          {...styles.touchView},
        ]}
      />
    );
  };
  return props?.isloading ? (
    <LoadingView />
  ) : (
    // rederView()
    <FlatList
      nestedScrollEnabled={true}
      data={props?.data}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      style={{}}
      contentContainerStyle={styles.flatListView}
      renderItem={({item}) => {
        return <RederView data={item} />;
      }}
    />
  );
};
