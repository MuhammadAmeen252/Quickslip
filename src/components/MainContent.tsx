import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  heading?: string;
  content?: string;
  list?: string[];
  isHeadingCenter?: boolean;
}

const MainContent: React.FC<Props> = ({
  heading,
  content,
  list,
  isHeadingCenter,
}) => {
  return (
    <View>
      <Text
        style={[
          styles.main_heading,
          isHeadingCenter && styles.centered_heading,
        ]}>
        {heading}
      </Text>
      {content && <Text style={[styles.content, !list && styles.bottomMargin]}>
        {content}
      </Text>}
      {list && list.length > 0 && <View style={styles.listContainer}>
          {list && list.map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
      </View>}
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

  centered_heading: {
    width: '100%',
    textAlign: 'center',
  },

  content: {
    color: 'black',
  },

  bottomMargin: {
    marginBottom: 24,
  },

  listItemContainer: {
    flexDirection: 'row', // Align bullet and text horizontally
    alignItems: 'center', // Vertically align bullet and text
    marginBottom: 2,
    marginLeft: 7,
  },

  listContainer: {
    marginTop: 8,
  },

  bullet: {
    fontSize: 12, // Adjust bullet size if needed
    marginRight: 8,
  },

  listItemText: {
    color: 'gray',
    marginLeft: 2,
  },
});
