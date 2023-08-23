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
import TextInput from '../components/Textinput';

interface Props {
  navigation: any;
}

interface FormData {
  password: string;
  confirmPassword: string;
}

const PasswordInformation: React.FC<Props> = ({navigation}) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const methods = useForm<FormData>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const passwordValidationPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const onSubmit = async (data: FormData) => {
      const isFormValid = await methods.trigger();
  
      if (isFormValid) {
        if (data.password !== data.confirmPassword) {
          setConfirmPasswordError('Passwords do not match');
        } else if (!passwordValidationPattern.test(data.password)) {
          setPasswordError(
            'Password should be at least 8 characters, and contain a number, a lowercase letter, an uppercase letter, and a special character',
          );
        } else {
          setPasswordError(null);
          setConfirmPasswordError(null);
          Alert.alert('Form submitted!');
          methods.reset();
          setDisableButton(false);
          navigation.navigate("UploadPictureInfo");
        }
      } else {
        Alert.alert('Please fill out all required fields');
      }
    };

  useEffect(() => {
    const isFormValid = methods.formState.isValid;
    setDisableButton(!isFormValid);
  }, [methods.formState.isValid]);

  return (
    <SafeAreaView>
      <GoBackHeading text="Password" />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <MainContent
            isHeadingCenter
            heading="Create Password"
            content="All fields are required to continue."
            list={[
              'Password should be at least 8 characters',
              'Password should contain a number',
              'Password should contain a lowercase letter',
              'Password should contain a capital letter',
              'Password should contain a special character',
            ]}
          />
          <View style={styles.formContainer}>
            <FormProvider {...methods}>
          <Controller
            control={methods.control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                handleChange={onChange}
                Value={value}
                label="Password"
                key="password"
                icon={require('../assets/icons/lock_blue.png')}
                activeIcon={require('../assets/icons/lock_grey.png')}
                password
                required
              />
            )}
            name="password"
            rules={{
              required: true,
              minLength: 8,
              pattern: passwordValidationPattern,
            }}
          />
          {/* {(methods.formState.errors.password && (
            <Text style={styles.errorText}>
              {methods.formState.errors.password.message}
            </Text>
          )) || (
            passwordError && (
              <Text style={styles.errorText}>{passwordError}</Text>
            )
          )} */}

              <Controller
                control={methods.control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    handleChange={onChange}
                    Value={value}
                    label="Confirm Password"
                    key="confirmPassword"
                    icon={require('../assets/icons/lock_blue.png')}
                    activeIcon={require('../assets/icons/lock_grey.png')}
                    confirmPassword
                    required
                  />
                )}
                name="confirmPassword"
                rules={{
                  required: true,
                  minLength: 8,
                  pattern: passwordValidationPattern,
                }}
              />
              {/* {methods.formState.errors.confirmPassword && (
                <Text style={styles.errorText}>
                  {methods.formState.errors.confirmPassword.message}
                </Text>
              )}
              {confirmPasswordError && (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              )} */}

              <TouchableOpacity
                style={[
                  styles.register_button,
                  {backgroundColor: disableButton ? '#8a8a8a' : '#186FE7'},
                ]}
                onPress={methods.handleSubmit(onSubmit)}
                // disabled={disableButton}
              >
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

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 0,
  },
});

export default PasswordInformation;
