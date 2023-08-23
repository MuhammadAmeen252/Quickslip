import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface GoBackProps {
  text: string;
  hideBackArrow?: boolean;
}

const GoBackHeading: React.FC<GoBackProps> = ({text, hideBackArrow}) => {
  const navigation: any = useNavigation();

  const handleBackRoute = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {!hideBackArrow && (
        <TouchableOpacity onPress={handleBackRoute}>
          <Image
            style={styles.back_icon}
            source={require('../assets/icons/back_arrow.png')}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default GoBackHeading;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
  },
  back_icon: {
    height: 18,
    width: 18,
  },
  title: {
    flex: 1, // Occupy available space
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
