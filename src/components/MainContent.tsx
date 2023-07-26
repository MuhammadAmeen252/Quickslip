import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface props {
  heading?: string;
  content?: string;
}
const MainContent: React.FC<props> = ({heading, content}) => {
  return (
    <View>
      <Text style={styles.main_heading}>{heading}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  main_heading: {
    fontWeight: '700',
    fontSize: wp(8),
    color: 'black',
    marginVertical: 16,
  },

  content: {
    color: 'black',
    marginBottom: 24,
  },
});
