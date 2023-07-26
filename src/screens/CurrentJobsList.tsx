import React from 'react';
import Bottombar from '../components/Bottombar';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CurrentJobsList = () => {
  const navigation: any = useNavigation();

  const handleBack = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={styles.container}>
          <View>
            <TouchableOpacity
              onPress={() => {
                handleBack();
              }}
              style={styles.back_button}>
              <Image
                style={styles.back_button_icon}
                source={require('../assets/icons/back_arrow_white.png')}
              />
              <Text style={styles.back_button_title}>Back to Job List</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.job_title}>Job #12981238738 Toyota Prius</Text>
          </View>

          <View>
            <Text style={styles.job_schedule}>
              Scheduled Tow: 3:00 AM, September 15, 2023
            </Text>
          </View>

          <View style={styles.job}>
            <View>
              <Image source={require('../assets/icons/radio_button.png')} />
            </View>
            <View style={styles.horizontal_line}></View>
            <View>
              <View style={styles.details}>
                <Text style={styles.owner}>Eric Brown Homes</Text>
                <Text style={styles.address}>
                  1111 Eric BrownAve, Dallas, TX 15900
                </Text>
              </View>

              <View>
                <Text style={styles.owner}>Eric Brown Homes</Text>
                <Text style={styles.address}>
                  1111 Eric BrownAve, Dallas, TX 15900
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.en_route_button}>
                <Text style={styles.en_route}>En Route</Text>
              </View>

              <View>
                <Text style={styles.TBD}>TBD</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.second_car}>Second Car @ Eric Brown Homes</Text>
          </View>

          <View style={styles.job}>
            <View>
              <Image source={require('../assets/icons/radio_button.png')} />
            </View>
            <View style={styles.horizontal_line}></View>
            <View>
              <View style={styles.details}>
                <Text style={styles.owner}>Eric Brown Homes</Text>
                <Text style={styles.address}>
                  1111 Eric BrownAve, Dallas, TX 15900
                </Text>
              </View>

              <View>
                <Text style={styles.owner}>Eric Brown Homes</Text>
                <Text style={styles.address}>
                  1111 Eric BrownAve, Dallas, TX 15900
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.en_route_button}>
                <Text style={styles.en_route}>En Route</Text>
              </View>

              <View>
                <Text style={styles.TBD}>TBD</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Bottombar
          title="NAVIGATE TO COMPLEX"
          icon={require('../assets/icons/right_arrow.png')}
          route="CurrentJob"
          navigation={navigation}
        />
      </SafeAreaView>
    </>
  );
};

export default CurrentJobsList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },

  back_button: {
    backgroundColor: '#186FE7',
    width: 144,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  back_button_icon: {
    height: 16,
    width: 16,
    marginRight: 7,
  },

  back_button_title: {
    color: '#ffffff',
  },

  job_title: {
    fontSize: 16,
    color: '#979797',
    marginTop: 24,
    marginBottom: 12,
  },

  job_schedule: {
    fontSize: 16,
    color: '#282828',
    marginBottom: 12,
  },

  job: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#808080',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#808080',
    paddingLeft: 12,
    paddingVertical: 16,
    position: 'relative',
  },

  details: {
    marginBottom: 32,
  },

  horizontal_line: {
    borderTopWidth: 0.5,
    borderColor: '#808080',
    marginVertical: 16,
    width: '100%',
    position: 'absolute',
  },

  owner: {
    color: '#282828',
  },

  address: {
    color: '#808080',
    maxWidth: 160,
  },

  en_route_button: {
    height: 24,
    width: 66,
    backgroundColor: '#E3BB2B',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 65,
  },

  en_route: {
    fontSize: 12,
    color: '#ffffff',
  },

  TBD: {
    fontSize: 12,
    color: '#808080',
    width: 70,
    textAlign: 'center',
  },

  second_car: {
    color: '#808080',
    fontSize: 16,
    marginVertical: 16,
  },
});
