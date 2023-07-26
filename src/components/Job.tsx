import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface props {
  accept?: boolean;
  onGoing?: boolean;
  completed?: boolean;
}

const Job: React.FC<props> = ({accept, onGoing, completed}) => {
  const navigation: any = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CurrentJob');
        }}
        style={styles.job_container}>
        <View>
          <Text style={styles.job_title}>Toyota Prius</Text>
          <View style={styles.job_details_container}>
            <Image
              style={styles.icon}
              source={
                accept
                  ? require('../assets/icons/cross_icon.png')
                  : require('../assets/icons/tick_icon.png')
              }
            />
            <Text style={styles.job_details}>3:00 AM, September 15, 2023</Text>
          </View>
        </View>
        <View
          style={[
            styles.button,
            {
              backgroundColor: accept
                ? '#186FE7'
                : onGoing
                ? '#FF820F'
                : '#f5f5f5',
              borderWidth: completed ? 1 : 0,
              borderColor: completed ? '#000000' : '',
            },
          ]}>
          <Text
            style={{
              color: completed ? '#000000' : '#ffffff',
            }}>
            {accept ? 'Accept' : onGoing ? 'Ongoing' : 'Completed'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Job;

const styles = StyleSheet.create({
  job_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#808080',
  },

  job_title: {
    fontSize: wp(4),
    color: '#979797',
  },

  job_details_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  job_details: {
    color: '#000000',
    fontSize: wp(4),
  },

  icon: {
    height: 10,
    width: 10,
    marginRight: 8,
  },

  button: {
    width: wp(25),
    height: 32,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 15,
  },
});
