import React, {useState} from 'react';
import GoBack from '../components/GoBack';
import DropDown from '../components/DropDown';
import {useNavigation} from '@react-navigation/native';
import {dropdown_1, dropdown_2} from '../utils/mock_data';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const AllJobs = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [openTwo, setOpenTwo] = useState(false);
  const [valueTwo, setValueTwo] = useState(null);
  const [searchText, setSearchText] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.go_back}>
              <GoBack />
            </View>
            <View>
              <Text style={styles.main_heading}>JOB LIST</Text>
            </View>
            <View>
              <Image
                style={styles.notification_icon}
                source={require('../assets/icons/notification.png')}
              />
            </View>
          </View>

          <View style={styles.search_container}>
            <TouchableWithoutFeedback
              onPress={() => {
                setIsActive(true);
              }}>
              <View style={styles.search_bar}>
                <Text
                  style={[styles.label, isActive ? styles.active_label : null]}>
                  Search
                </Text>
                <TextInput
                  onChangeText={value => {
                    setSearchText(value);
                  }}
                  onFocus={() => {
                    setIsActive(true);
                  }}
                  onBlur={() => {
                    setIsActive(false);
                  }}
                  value={searchText}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          {Platform.OS === 'ios' ? (
            // On IOS we are using dropdown with KeyboardAwareScrollView
            <KeyboardAwareScrollView>
              <View>
                <DropDown
                  open={open}
                  setOpen={setOpen}
                  value={value}
                  setValue={setValue}
                  content={dropdown_1}
                  placeholder={`3 Cars Pending \nEric Brown Homes`}
                  borderColor={'#f5f5f5'}
                  textColor={'#000000'}
                />
              </View>

              <View style={{marginTop: open ? 220 : 0}}>
                <DropDown
                  open={openTwo}
                  setOpen={setOpenTwo}
                  value={valueTwo}
                  setValue={setValueTwo}
                  content={dropdown_2}
                  placeholder={`2 Cars Pending \nSeaman Homes`}
                  borderColor={'#f5f5f5'}
                  textColor={'#000000'}
                />
              </View>
            </KeyboardAwareScrollView>
          ) : (
            // On Android we are using dropdown without KeyboardAwareScrollView
            <>
              <View>
                <DropDown
                  open={open}
                  setOpen={setOpen}
                  value={value}
                  setValue={setValue}
                  content={dropdown_1}
                  key={'Dropdown_1'}
                  placeholder={`3 Cars Pending \nEric Brown Homes`}
                  borderColor={'#f5f5f5'}
                  textColor={'#000000'}
                />
              </View>

              <View style={{marginTop: open ? 220 : 0}}>
                <DropDown
                  open={openTwo}
                  setOpen={setOpenTwo}
                  value={valueTwo}
                  setValue={setValueTwo}
                  content={dropdown_2}
                  key={'Dropdown_2'}
                  placeholder={`2 Cars Pending \nSeaman Homes`}
                  borderColor={'#f5f5f5'}
                  textColor={'#000000'}
                />
              </View>
            </>
          )}
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('AddTow');
            }}>
            <Text style={styles.botton_text}>NEW JOB</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AllJobs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    flex: 1,
  },

  header: {
    marginTop: 28,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  go_back: {
    marginBottom: 10,
  },

  main_heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },

  notification_icon: {
    width: 21,
    height: 26,
  },

  search_container: {
    paddingVertical: 12,
    marginTop: 8,
    marginBottom: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#808080',
    borderBottomWidth: 0.5,
    borderBottomColor: '#808080',
    backgroundColor: '#f5f5f5',
  },

  search_bar: {
    borderWidth: 2,
    borderColor: '#8a8a8a',
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: '#ffffff',
  },

  label: {
    position: 'absolute',
    left: 20,
    top: 10,
    fontSize: 20,
    color: '#808080',
  },

  active_label: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 5,
    position: 'absolute',
    top: -15,
    left: 20,
    fontSize: 20,
    color: '#808080',
  },

  button_container: {
    paddingHorizontal: 20,
    paddingBottom: 34,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },

  button: {
    backgroundColor: '#186FE7',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  botton_text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
});
