import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const GoBack = () => {
  const navigation: any = useNavigation();

  const handleBackRoute = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleBackRoute();
        }}>
        <Image
          style={styles.back_icon}
          source={require('../assets/icons/back_arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  back_icon: {
    height: 21,
    width: 21,
    marginTop: 17,
  },
});
