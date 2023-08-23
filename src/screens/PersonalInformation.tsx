import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GoBackHeading from '../components/GoBackHeading';
import MainContent from '../components/MainContent';
import TextInput from '../components/Textinput'; // Adjust the import path according to your component structure

interface Props {
  navigation: any;
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
}

const PersonalInformation: React.FC<Props> = ({navigation}) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const methods = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // Perform any additional validation or processing if needed
    const isFormValid = await methods.trigger(); // Trigger validation for all fields

    if (isFormValid) {
      const jsonData = JSON.stringify(data);
      methods.reset();
      setDisableButton(false);
      navigation.navigate("PasswordInformation")
    } else {
      Alert.alert('Please fill out all required fields');
    }
  };

  useEffect(() => {
    // Check if all form fields are valid
    const isFormValid = methods.formState.isValid;
    setDisableButton(!isFormValid); // Disable button if form is not valid
  }, [methods.formState.isValid]);

  return (
    <SafeAreaView>
      <GoBackHeading text="Personal Information" />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <MainContent
            isHeadingCenter
            heading="Personal Information"
            content="All fields are required to continue."
            list={[
              'Enter your full name',
              'Work / Company Email',
              'Work / Company Phone Number (add extension if necessary)',
            ]}
          />
          <View style={styles.formContainer}>
            <FormProvider {...methods}>
              <Controller
                control={methods.control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    handleChange={onChange}
                    Value={value}
                    label="First Name"
                    key="firstName"
                    icon={require('../assets/icons/input_blue.png')}
                    activeIcon={require('../assets/icons/name_input.png')}
                    name
                    required
                  />
                )}
                name="firstName"
                rules={{required: true}}
              />

              <Controller
                control={methods.control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    handleChange={onChange}
                    Value={value}
                    label="Last Name"
                    key="lastName"
                    icon={require('../assets/icons/input_blue.png')}
                    activeIcon={require('../assets/icons/name_input.png')}
                    name
                    required
                  />
                )}
                name="lastName"
                rules={{required: true}}
              />

              <Controller
                control={methods.control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    handleChange={onChange}
                    Value={value}
                    label="Phone Number"
                    key="phone"
                    icon={require('../assets/icons/phone_input.png')}
                    activeIcon={require('../assets/icons/phone_grey.png')}
                    phone
                    required
                  />
                )}
                name="phone"
                rules={{required: true}}
              />

              <TouchableOpacity
                style={[
                  styles.register_button,
                  {backgroundColor: disableButton ? '#8a8a8a' : '#186FE7'},
                ]}
                onPress={methods.handleSubmit(onSubmit)}
                disabled={disableButton}>
                <Image
                  style={styles.lock_icon}
                  source={require('../assets/icons/Lock.png')}
                />
                <Text style={styles.button_text}>Continue</Text>
              </TouchableOpacity>
            </FormProvider>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    padding: 20,
  },

  formContainer: {
    paddingTop: 70,
  },

  lock_icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  register_button: {
    width: '100%',
    height: 48,
    backgroundColor: '#186FE7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 70,
  },

  button_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default PersonalInformation;
