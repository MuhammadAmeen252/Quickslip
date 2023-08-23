import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DropDown from '../components/DropDown';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GoBackHeading from '../components/GoBackHeading';
import MainContent from '../components/MainContent';
import {Truck_List} from '../utils/mock_data';
import TruckIcon from '../components/TowTruckIcon';

interface Props {
  navigation: any;
}

const VehicleInfo: React.FC<Props> = ({navigation}) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const methods = useForm();

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
    // <View style={{flex:1}}>
    <SafeAreaView>
      <GoBackHeading text="Vehicle Information" />

      <View>
        <View style={styles.container}>
        <MainContent
          isHeadingCenter
          heading="Vehicle Information"
          content="Select the vehicle you will be driving to tow vehicles in."
        />
          <View style={styles.formContainer}>
            <FormProvider {...methods}>
              <Controller
                control={methods.control}
                render={({field: {onChange, onBlur}}) => (
                  <DropDown
                    open={open}
                    setOpen={setOpen}
                    value={value}
                    setValue={setValue}
                    onChange={onChange}
                    content={Truck_List}
                    placeholder={'Select Truck (Required)'}
                    borderColor={value ? '#8a8a8a' : '#186FE7'}
                    textColor={value ? '#8a8a8a' : '#186FE7'}
                    blueArrow
                    Icon={<TruckIcon />}
                  />
                )}
                name="selectValue"
                key="selectValue"
                rules={{required: true}}
              />

              {/* When the dropdown open the submit button goes down */}
              <View style={styles.formContainer}>
                <TouchableOpacity
                  style={[
                    styles.register_button,
                    {backgroundColor: disableButton ? '#8a8a8a' : '#186FE7'},
                  ]}
                  onPress={() => {}}
                  disabled={disableButton}>
                  <Image
                    style={styles.lock_icon}
                    source={require('../assets/icons/Lock.png')}
                  />
                  <Text style={styles.button_text}>Continue</Text>
                </TouchableOpacity>
              </View>
            </FormProvider>
          </View>
        </View>
      </View>
    </SafeAreaView>
    //   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  formContainer: {
    paddingTop: 120,
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

export default VehicleInfo;
