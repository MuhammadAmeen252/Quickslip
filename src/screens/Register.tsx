import Textinput from '../components/Textinput';
import React, {useState, useEffect} from 'react';
import MainContent from '../components/MainContent';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GoBackHeading from '../components/GoBackHeading';
import SignupStepCard from '../components/SignupStepCard';
import PersonIcon from '../components/PersonIcon';
import LockIcon from '../components/LockIcon';
import CameraIcon from '../components/CameraIcon';
import TruckIcon from '../components/TowTruckIcon';
import ConfirmationIcon from '../components/ConfirmationIcon';

interface props {
  navigation: any;
}

const Register: React.FC<props> = () => {
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const methods = useForm();

  const navigation: any = useNavigation();

  const navigateToNext = (data: any) => {
    navigation.navigate('PersonalInformation');
  };

  return (
    <SafeAreaView>
      <GoBackHeading hideBackArrow text="Personal Information" />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <MainContent
            isHeadingCenter
            heading="Setting Up an Account"
          />
          <View style={styles.StepsContainer}>
            <SignupStepCard ImageElement={<PersonIcon/>} subtitle='Name, Email, Phone Number' title='Personal Information' isCompleted/>
            <SignupStepCard ImageElement={<LockIcon/>} subtitle='Password creation and confirmation' title='Create Password' />
            <SignupStepCard isDisabled ImageElement={<CameraIcon isDisabled />} subtitle='Upload a picture of yourself' title='Profile Picture' />
            <SignupStepCard isDisabled ImageElement={<TruckIcon isDisabled/>} subtitle='Select the truch you will be driving' title='Vehicle Information' />
            <SignupStepCard isDisabled ImageElement={<ConfirmationIcon isDisabled/>} subtitle='Overview of each section' title='Confirmation' />
          </View>
          <TouchableOpacity
                style={[
                  styles.register_button,
                  { backgroundColor: disableButton ? '#8a8a8a' : '#186FE7' },
                ]}
                onPress={navigateToNext}
                disabled={disableButton}
              >
                <Text style={styles.button_text}>NEXT</Text>
                <Image
                  style={styles.btn_icon}
                  source={require('../assets/icons/right_arrow.png')}
                />
              </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    padding: 20,
  },

  btn_icon: {
    height: 17,
    width: 17,
  },

  StepsContainer: {
    paddingTop: 30,
  },

  register_button: {
    width: '100%',
    height: 48,
    backgroundColor: '#186FE7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop:60
  },

  button_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginRight:15
  },
});
