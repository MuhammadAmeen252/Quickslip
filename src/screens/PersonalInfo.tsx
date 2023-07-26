import GoBack from '../components/GoBack';
import Textinput from '../components/Textinput';
import React, {useEffect, useState} from 'react';
import MainContent from '../components/MainContent';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PersonalInfo = () => {
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const methods = useForm();
  const navigation: any = useNavigation();

  const onSubmit = (data: any) => {
    Alert.alert('Peronal Info >>> ', JSON.stringify(data));
    methods.reset();
  };

  const checkFormCompletion = () => {
    // if there is no error and all form fileds fills then enable the register button

    setDisableButton(!methods.formState.isValid);
  };

  useEffect(() => {
    checkFormCompletion();
  }, [methods.formState.isValid]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView>
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
            heading="Personal Information"
            content="Your current information on fill. Click on any bar to modify theinformation provided and save the changes."
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
                    icon={require('../assets/icons/name_input_blue.png')}
                  />
                )}
                name="name"
                rules={{required: true}}
              />
            </View>

            <View style={{marginVertical: 18}}>
              <Controller
                control={methods.control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Textinput
                    handleChange={onChange}
                    Value={value}
                    label="Email"
                    key="email"
                    icon={require('../assets/icons/mail_blue_icon.png')}
                    email
                  />
                )}
                name="email"
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
                <Text style={styles.button_text}>SAVE CHANGES</Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;

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

  submit_button: {
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
