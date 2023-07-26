import React from 'react';
import GoBack from '../components/GoBack';
import MainContent from '../components/MainContent';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AccountSettings = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <GoBack />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <View style={styles.logout_button}>
              <Text style={styles.logout_text}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
        <MainContent
          heading="Account Settings"
          content="Where you can modify and edit anything associated with your account."
        />

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('PersonalInfo');
            }}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/edit_profile.png')}
            />
            <Text style={styles.button_text}>Personal Information</Text>
            <Image
              style={styles.icon}
              source={require('../assets/icons/right_arrow_blue.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 16}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/lock_input.png')}
            />

            <Text style={styles.change_password}>Change Password</Text>
            <Image
              style={styles.icon}
              source={require('../assets/icons/right_arrow_blue.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logout_button: {
    width: 72,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#186FE7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  logout_text: {
    fontSize: 16,
    color: '#186FE7',
  },

  button: {
    height: 48,
    borderWidth: 1,
    borderColor: '#186FE7',
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button_text: {
    color: '#186FE7',
    fontSize: 20,
  },

  change_password: {
    color: '#186FE7',
    fontSize: 20,
    marginRight: 20,
  },

  icon: {
    height: 32,
    width: 32,
  },
});
