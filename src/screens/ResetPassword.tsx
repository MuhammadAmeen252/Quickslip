import GoBack from '../components/GoBack';
import Textinput from '../components/Textinput';
import React, {useEffect, useState} from 'react';
import MainContent from '../components/MainContent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ResetPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const methods = useForm();

  const onSubmit = (data: any) => {
    Alert.alert('Peronal Info >>> ', JSON.stringify(data));
    methods.reset();
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
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <GoBack />
          <MainContent
            heading="Reset Password"
            content="Your new password must be different from the previously used passwords."
          />

          <FormProvider {...methods}>
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
                    label="Current Password"
                    key="currentPassword"
                    icon={require('../assets/icons/lock_input.png')}
                    password
                  />
                )}
                name="currentPassword"
                rules={{required: true}}
              />
            </View>

            <View style={{marginVertical: 20}}>
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
                    icon={require('../assets/icons/lock_input.png')}
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
                    icon={require('../assets/icons/lock_input.png')}
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
                  styles.submit_button,
                  {backgroundColor: disableButton ? '#8a8a8a' : '#186FE7'},
                ]}
                onPress={methods.handleSubmit(onSubmit)}
                disabled={disableButton}>
                <Text style={styles.button_text}>UPDATE NEW PASSWORD</Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    padding: 20,
  },

  submit_button: {
    width: '100%',
    height: 48,
    backgroundColor: '#186FE7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },

  button_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
