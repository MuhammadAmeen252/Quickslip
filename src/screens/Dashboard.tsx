import React from 'react';
import Button from '../components/Button';
import Bottombar from '../components/Bottombar';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Dashboard = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Image
                style={styles.mail_icon}
                source={require('../assets/icons/mail_icon.png')}
              />
            </View>
            <View>
              <Image
                style={styles.logo}
                source={require('../assets/icons/logo.png')}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AccountSettings');
                }}>
                <Image
                  style={styles.settings_icon}
                  source={require('../assets/icons/settings.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.underline}></View>

          <View style={styles.profile}>
            <Text style={styles.name}>Monica Lewinsky</Text>
            <Text style={styles.vehicle}>Vehicle : Truck 1</Text>
            <Text style={styles.area}>Area : Region 1 Dallas</Text>
          </View>

          <View style={styles.underline}></View>

          <View style={{marginTop: 24}}>
            <Button
              title="CURRENT JOB"
              icon={require('../assets/icons/location_icon.png')}
              route="CurrentJobsList"
              navigation={navigation}
              currentJob
            />
          </View>

          <View>
            <Button
              title="COMPLEX LIST"
              icon={require('../assets/icons/list_icon.png')}
              route="AllJobs"
              navigation={navigation}
              complexButton
            />
          </View>
        </View>

        <Bottombar
          title="SIGN OUT"
          icon={require('../assets/icons/signout_icon.png')}
          route="Register"
          navigation={navigation}
          signOut
        />
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },

  header: {
    marginTop: 28,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  underline: {
    width: '100%',
    backgroundColor: '#808080',
    paddingVertical: 0.5,
  },

  profile: {
    marginVertical: 8,
  },

  name: {
    color: '#282828',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 8,
  },

  vehicle: {
    marginBottom: 8,
    color: '#282828',
  },

  area: {
    marginBottom: 8,
    color: '#282828',
  },

  mail_icon: {
    height: 25,
    width: 32,
  },

  logo: {
    width: 160,
    height: 33,
  },

  settings_icon: {
    width: 30,
    height: 30,
  },
});
