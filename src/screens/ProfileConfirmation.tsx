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
import GoBackHeading from '../components/GoBackHeading';
import Checkbox from 'react-native-checkbox';
import { useNavigation } from '@react-navigation/native';

const ProfileConfirmation: React.FC = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [newsChecked, setNewsChecked] = useState(false);
  const navigation:any = useNavigation();

  return (
    <SafeAreaView>
      <GoBackHeading text="Confirmation" />

      <View>
        <View style={styles.container}>
          {/* Box 1: Personal Information */}
          <View>
          <View style={styles.box}>
            <Text style={styles.boxHeading}>Personal Information</Text>
            <TouchableOpacity style={styles.modifyButton} onPress={() => navigation.navigate("PersonalInformation")}>
              <Text style={styles.modifyButtonText}>Modify</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subText}>ERIC BROWN</Text>
          <Text style={styles.subText}>ERICBROWNISSLOW@MESA.IO</Text>
          <Text style={styles.subText}>(911) 911-0911</Text>
          </View>

          {/* Separation Line */}
          <View style={styles.separator} />

          {/* Heading: Images of Complex */}
          <Text style={styles.heading}>Images of Complex</Text>

          {/* Box 2: Image Box */}
          
          <View style={styles.imageBox}>
            {/* <Image
              source={require('../assets/icons/Lock.png')}
              style={styles.image}
            /> */}
          </View>

          {/* Separation Line */}
          <View style={styles.separator} />

          {/* Box 3: Vehicle Information */}
          <View>
            <View style={styles.box}>
              <Text style={styles.boxHeading}>Vehicle Information</Text>
              <TouchableOpacity style={styles.modifyButton}>
                <Text style={styles.modifyButtonText} onPress={() => navigation.navigate("VehicleInfo")}>Modify</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subText}>FORD F-150 #3</Text>
          </View>

          {/* Separation Line */}
          <View style={styles.separator} />

          {/* Box 4: Terms and Service */}
          <View style={styles.checkboxRow}>
            <View style={styles.checkboxContainer}>
            <Checkbox
            label=""
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
            checkboxStyle={styles.checkbox} // Apply custom styles to Checkbox component
          />
            </View>
            <View style={styles.termsBox}>
              <Text style={styles.termsHeading}>Terms and Service</Text>
              <Text style={styles.subText}>
                Required: I have read and agree to Quikslip.com{' '}
                <Text style={styles.linkText}>Terms and Service</Text> and{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
              </Text>
            </View>
          </View>

          {/* Box 5: QuikSlip News Updates */}
          <View style={styles.checkboxRow}>
            <View style={styles.checkboxContainer}>
            <Checkbox
            label=""
            checked={newsChecked}
            onChange={() => setNewsChecked(!newsChecked)}
            checkboxStyle={styles.checkbox} // Apply custom styles to Checkbox component
          />
            </View>
            <View style={styles.termsBox}>
              <Text style={styles.termsHeading}>QuikSlip News Updates</Text>
              <Text style={styles.subText}>
                Optional: I would like to receive news and updates about
                QuikSlip. You can unsubscribe anytime.{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
              </Text>
            </View>
          </View>

          {/* Button */}
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: termsChecked ? '#186FE7' : '#999'},
            ]}
            onPress={() => navigation.navigate("RegisterGreeting")}
            disabled={!termsChecked}>
            <Image
              source={require('../assets/icons/Lock.png')}
              style={styles.lockIcon}
            />
            <Text style={styles.buttonText}>COMPLETE</Text>
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
    paddingTop:55
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 10,
  },
  checkbox: {
    borderColor: 'white', // Gray border color
    backgroundColor: 'white', // White background
  },
  boxHeading: {
    fontSize: 15,
    color:'black',
    fontWeight:'bold'
  },
  modifyButton: {
    borderWidth: 1,
    borderColor: '#186FE7',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  modifyButtonText: {
    color: '#186FE7',
  },
  separator: {
    borderTopWidth: 0.01,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginVertical: 12,
  },
  heading: {
    fontSize: 15,
    marginBottom: 10,
    color:'black',
    fontWeight:'bold'
  },
  imageBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    marginBottom:4
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subText: {
    color: 'black',
    marginTop: 3,
    fontSize:12.5
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  checkboxContainer: {
    marginRight: 10,
    marginTop: 0,
  },
  termsBox: {
    flex: 1,
  },
  termsHeading: {
    fontSize: 15,
    color:'black',
    fontWeight:'bold'
  },
  linkText: {
    textDecorationLine:'underline',
    fontWeight:"500"
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#186FE7',
    borderRadius: 8,
    height: 48,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  lockIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default ProfileConfirmation;
