import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface CardProps {
  imageName?: string;
  ImageElement?: React.ReactNode;
  title: string;
  subtitle: string;
  isCompleted?: boolean;
  isDisabled?: boolean; // Add the isDisabled prop
  onPress?: () => void;
}

const SignupStepCard: React.FC<CardProps> = ({
  imageName,
  ImageElement,
  title,
  subtitle,
  isCompleted,
  isDisabled,
  onPress,
}) => {
  const cardContainerStyle = isDisabled
    ? [styles.cardContainer, styles.disabledCard]
    : styles.cardContainer;

  const containerStyle = isDisabled
    ? [styles.container, styles.disabledContainer]
    : styles.container;
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={isDisabled ? undefined : onPress}>
      <View style={cardContainerStyle}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBox}>
            {/* {imageName && <Image source={require(`../assets/icons/${imageName}.png`)} style={styles.image} />} */}
            {ImageElement}
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.arrowContainer}>
          {isCompleted ? (
            <Image
              source={require('../assets/icons/round-circle.png')} // Replace with your tick image source
              style={styles.tick}
            />
          ) : (
            <Image
              source={require('../assets/icons/arrow-forward.png')} // Replace with your arrow image source
              style={styles.arrow}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  disabledContainer: {
    opacity: 0.8,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  disabledCard: {
    
  },
  imageContainer: {
    marginRight: 15,
  },
  imageBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#D4E6FF',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  subtitle: {
    color: 'gray',
    fontSize: 12,
  },
  arrowContainer: {
    marginLeft: 15,
  },
  arrow: {
    width: 20,
    height: 20,
  },
  tick: {
    width: 30,
    height: 30,
  },
});

export default SignupStepCard;
