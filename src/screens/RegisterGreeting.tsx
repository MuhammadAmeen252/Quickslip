import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const RegisterGreeting: React.FC = () => {
  const navigation:any = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <Text style={styles.heading_light_text}>Hi Eric Brown,</Text>
            <Text style={styles.heading_bold_text}>
              Thanks for registering as a trucker.
            </Text>
            <Text style={styles.normal_text}>
              We’re sending an email to confirm the creation of your account. It
              serves as a record of your account. Please keep it!
            </Text>
            <Text style={styles.normal_text}>Thanks again!</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Dashboard')}>
            <Image
              source={require('../assets/icons/Dashboard.png')}
              style={styles.icon}
            />
            <Text style={styles.button_text}>ADMIN DASHBOARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  mainContainer: {
    paddingTop: 120,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#186FE7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 160,
  },

  button_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },

  heading_light_text: {
    color: 'black',
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 20,
  },
  heading_bold_text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
    maxWidth: '90%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  normal_text: {
    color: 'black',
    fontSize: 14,
    marginBottom: 20,
    justifyContent: 'flex-start',
    textAlign: 'left',
    width: '100%',
  },
});

export default RegisterGreeting;
