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

interface props {
  navigation: any;
}

const Register: React.FC<props> = () => {
  const [password, setPassword] = useState<string>('');
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const methods = useForm();

  const navigation: any = useNavigation();

  const onSubmit = (data: any) => {
    Alert.alert('Form Data', JSON.stringify(data));
    methods.reset();

    // once registration done then user can't come back
    navigation.replace('Dashboard');
  };

  const checkFormCompletion = () => {
    // if there is no error and all form fileds fills then enable the register button
    setDisableButton(
      !methods.formState.isValid || password !== confirmPassword,
    );
  };

  useEffect(() => {
    checkFormCompletion();
  }, [methods.formState.isValid, password, confirmPassword]);

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.logo_container}>
            <Image
              style={styles.logo}
              source={require('../assets/icons/logo_icon.png')}
            />
          </View>
          <MainContent
            heading="Tow Trucker Account"
            content="Thank you for joining Spartan Towing. To get you onboarded to the team, please enter your information."
          />
          <FormProvider {...methods}>
            <View>
              <Controller
                control={methods.control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Textinput
                    handleChange={onChange}
                    Value={value}
                    label="Name"
                    key="name"
                    icon={require('../assets/icons/input_blue.png')}
                    activeIcon={require('../assets/icons/name_input.png')}
                    name
                  />
                )}
                name="name"
                rules={{required: true}}
              />
            </View>

            <View>
              <Controller
                control={methods.control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Textinput
                    handleChange={onChange}
                    Value={value}
                    label="Phone"
                    key="phone"
                    icon={require('../assets/icons/phone_input.png')}
                    activeIcon={require('../assets/icons/phone_grey.png')}
                    phone
                  />
                )}
                name="phone"
                rules={{required: true}}
              />
            </View>

            <View>
              <Controller
                control={methods.control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Textinput
                    handleChange={val => {
                      onChange(val);
                      setPassword(val);
                    }}
                    Value={value}
                    label="New Password"
                    key="password"
                    icon={require('../assets/icons/lock_blue.png')}
                    activeIcon={require('../assets/icons/lock_grey.png')}
                    password
                  />
                )}
                name="password"
                rules={{required: true}}
              />
            </View>

            <View>
              <Controller
                control={methods.control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Textinput
                    handleChange={val => {
                      onChange(val);
                      setConfirmPassword(val);
                    }}
                    Value={value}
                    label="Confirm New Password"
                    key="confirm"
                    icon={require('../assets/icons/lock_blue.png')}
                    activeIcon={require('../assets/icons/lock_grey.png')}
                    confirmPassword
                  />
                )}
                name="confirmPassword"
                rules={{required: true}}
              />
            </View>

            <View>
              <TouchableOpacity
                style={[
                  styles.register_button,
                  {backgroundColor: disableButton ? '#8a8a8a' : '#186FE7'},
                ]}
                onPress={methods.handleSubmit(onSubmit)}
                disabled={disableButton}>
                <Text style={styles.button_text}>Register</Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
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

  logo_container: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 64,
    width: 64,
  },

  register_button: {
    width: '100%',
    height: 48,
    backgroundColor: '#186FE7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  button_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
