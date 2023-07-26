import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface props {
  icon?: any;
  route?: any;
  title?: string;
  navigation?: any;
  currentJob?: any;
  Vehicle?: boolean;
  complexButton?: boolean;
}

const Button: React.FC<props> = ({
  icon,
  title,
  route,
  Vehicle,
  navigation,
  currentJob,
  complexButton,
}) => {
  const handleRoute = () => {
    navigation.navigate(route);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleRoute();
        }}
        style={[
          styles.button,
          {
            backgroundColor: complexButton
              ? // if button is complex on then it color should be pink
                '#9747FF'
              : Vehicle
              ? // if button is for vehicle then it should be screen color background so button become stroke
                '#f5f5f5'
              : '#186FE7',

            // to make the stroke button for vehicle props
            borderWidth: Vehicle ? 1 : 0,
            borderColor: Vehicle ? '#186FE7' : '',
          },
        ]}>
        <Text
          style={[
            styles.button_text,
            {color: Vehicle ? '#186FE7' : '#ffffff'},
          ]}>
          {title}
        </Text>
        <Image
          style={
            currentJob
              ? styles.currentJob_icon
              : complexButton
              ? styles.complex_icon
              : styles.icon
          }
          source={icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 24,
  },

  button_text: {
    color: '#ffffff',
    fontSize: wp(6),
    fontWeight: '700',
    marginRight: 6,
  },

  icon: {
    width: 28,
    height: 24,
  },

  currentJob_icon: {
    width: 18,
    height: 26,
  },

  complex_icon: {
    width: 24,
    height: 24,
  },
});
