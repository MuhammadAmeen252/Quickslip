import {addTow} from '../utils/mock_data';
import GoBack from '../components/GoBack';
import DropDown from '../components/DropDown';
import Textinput from '../components/Textinput';
import React, {useEffect, useState} from 'react';
import MainContent from '../components/MainContent';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AddTow = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [disableButton, setDisableButton] = useState<boolean>(true);

  const methods = useForm();
  const navigation: any = useNavigation();

  const onSubmit = (data: any) => {
    Alert.alert('Form Data: ', JSON.stringify(data));
    navigation.navigate('TowConfirm');
    methods.reset();

    // when whole form is submitted then reset the dropdown value
    setValue(null);
  };

  const checkFormCompletion = () => {
    // check if all form fields are fill or not
    const isFormValid = methods.formState.isValid;

    // check the dropdown value is selected or not
    const isDropdownValueSelected = value !== null;

    // if whole form is filled then enable the submit button
    setDisableButton(!(isFormValid && isDropdownValueSelected));
  };

  useEffect(() => {
    checkFormCompletion();
  }, [methods.formState.isValid]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <GoBack />
          <MainContent
            heading="Add Tow"
            content="A property manager tell you to take an extra vehicles that was not in the data base? Add the vehicle here."
          />

          <FormProvider {...methods}>
            <View>
              <Controller
                control={methods.control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Textinput
                    handleChange={val => {
                      onChange(val);
                    }}
                    Value={value}
                    label="Complex Name..."
                    key="complexName"
                    icon={require('../assets/icons/name_input_blue.png')}
                    activeIcon={require('../assets/icons/name_input.png')}
                  />
                )}
                name="complexName"
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
                    }}
                    Value={value}
                    label="License Plate..."
                    key="licensePlate"
                    icon={require('../assets/icons/car_blue.png')}
                    activeIcon={require('../assets/icons/car_grey.png')}
                  />
                )}
                name="licensePlate"
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
                    }}
                    Value={value}
                    label="Car Make and Model"
                    key="make&make"
                    icon={require('../assets/icons/str_blue.png')}
                    activeIcon={require('../assets/icons/str_grey.png')}
                  />
                )}
                name="carMakeModel"
                rules={{required: true}}
              />
            </View>

            <Controller
              control={methods.control}
              render={({field: {onChange, onBlur}}) => (
                <DropDown
                  open={open}
                  setOpen={setOpen}
                  value={value}
                  setValue={setValue}
                  onChange={onChange}
                  content={addTow}
                  placeholder={'Reason for Tow'}
                  borderColor={value ? '#8a8a8a' : '#186FE7'}
                  textColor={value ? '#8a8a8a' : '#186FE7'}
                  blueArrow
                />
              )}
              name="selectValue"
              key="selectValue"
              rules={{required: true}}
            />

            {/* When the dropdown open the submit button goes down */}
            <View style={{marginTop: open ? 120 : 24}}>
              <TouchableOpacity
                style={[
                  styles.Tow_button,
                  {backgroundColor: disableButton ? '#8a8a8a' : '#186FE7'},
                ]}
                onPress={methods.handleSubmit(onSubmit)}
                disabled={disableButton}>
                <Text style={styles.button_text}>TOW VEHICLE</Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddTow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  Tow_button: {
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
