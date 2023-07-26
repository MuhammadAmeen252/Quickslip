import React from 'react';
import GoBack from '../components/GoBack';
import Button from '../components/Button';
import MainContent from '../components/MainContent';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, StyleSheet, View} from 'react-native';

const Compound = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <GoBack />

        <View>
          <View style={styles.logo_container}>
            <Image
              style={styles.logo}
              source={require('../assets/icons/logo_icon.png')}
            />
          </View>
          <View>
            <MainContent
              heading="Take to Compound"
              content="Thank you for towing the violated vehicle. Please take the impounded vehicle to our lot. If you need to tow an additional vehicle please select that option."
            />
          </View>
          <View>
            <Button
              navigation={navigation}
              title="TAKE TO LOT"
              icon={require('../assets/icons/Garage.png')}
              route="CurrentJob"
            />

            <Button
              navigation={navigation}
              title="ADD VEHICLE"
              icon={require('../assets/icons/car_icon.png')}
              route="CurrentJob"
              Vehicle
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Compound;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  logo_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 64,
    width: 64,
    marginTop: 32,
    marginBottom: 16,
  },
});
