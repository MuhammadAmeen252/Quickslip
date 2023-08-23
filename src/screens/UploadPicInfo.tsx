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
import ImageUploadBox from '../components/ImageUploadBox';
import { useNavigation } from '@react-navigation/native';

interface Props {
  navigation: any;
}

const UploadPicInfo: React.FC<Props> = () => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [imageInfo, setImageInfo] = useState(false);
  const navigation: any = useNavigation();

  const handleChangeImageInfo = (image: any) => {
    Alert.alert('Image data submitted!');
    setImageInfo(image);
    setDisableButton(false);
    navigation.navigate("VehicleInfo")
  } 

  return (
    <SafeAreaView>
      <GoBackHeading text="Personal Information" />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <MainContent
            isHeadingCenter
            heading="Profile Picture"
            content="Upload (only 1) the most relevant picture of yourself , so property managers can easily identify the you."
            list={[
              'You can override the uploaded picture by dragging a new one over it',
            ]}
          />
          <View>
            <ImageUploadBox handleImageInfo={handleChangeImageInfo} imageInfo={imageInfo}/>
          </View>
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

export default UploadPicInfo;
