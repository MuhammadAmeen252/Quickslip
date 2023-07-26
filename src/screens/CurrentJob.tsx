import React from 'react';
import GoBack from '../components/GoBack';
import {jobDetails} from '../utils/mock_data';
import Bottombar from '../components/Bottombar';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CurrentJob = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/images/building.png')}
          />
          <View style={styles.go_back}>
            <GoBack />
          </View>
          <View style={styles.image_details}>
            <Text style={styles.image_heading}>Dallas Fort Worth Complex</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/location_icon_white.png')}
                style={styles.location_icon}
              />
              <Text style={styles.image_subheading}>
                1111 Eric Brown Ave, Dallas, TX 15900
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.job}>Job #129081923 </Text>
        <FlatList
          data={jobDetails}
          renderItem={({item}) => (
            <View style={styles.details}>
              <Text style={styles.details_heading}>{item.heading}</Text>
              <Text style={styles.details_content}>{item.content}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          style={styles.container}
        />

        <Bottombar
          title="LOCATED VEHICLES"
          icon={require('../assets/icons/right_arrow.png')}
          navigation={navigation}
          route="Compound"
        />
      </SafeAreaView>
    </>
  );
};

export default CurrentJob;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 12,
  },

  image: {
    height: hp(45),
    width: '100%',
  },

  image_details: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 12,
  },

  image_heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },

  image_subheading: {
    color: '#ffffff',
    margin: 8,
  },

  location_icon: {
    height: 13,
    width: 9,
  },

  go_back: {
    position: 'absolute',
    top: 0,
    paddingTop: 12,
    paddingLeft: 12,
  },

  job: {
    fontSize: 24,
    fontWeight: '700',
    color: '#282828',
    paddingLeft: 12,
    paddingVertical: 16,
    backgroundColor: '#f5f5f5',
  },

  details: {
    borderBottomWidth: 0.5,
    borderBlockColor: '#808080',
    paddingBottom: 8,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
  },

  details_heading: {
    color: '#979797',
    fontSize: 16,
  },

  details_content: {
    color: '#282828',
    fontSize: 16,
  },
});
