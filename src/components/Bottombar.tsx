import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface props {
  icon?: any;
  route?: any;
  title?: string;
  navigation?: any;
  signOut?: boolean;
}

const Bottombar: React.FC<props> = ({
  icon,
  title,
  route,
  signOut,
  navigation,
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
          styles.container,
          {backgroundColor: signOut ? '#808080' : '#186FE7'},
        ]}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.icon} source={icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Bottombar;

const styles = StyleSheet.create({
  container: {
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },

  icon: {
    height: 21,
    width: 21,
    marginLeft: 6,
  },
});
