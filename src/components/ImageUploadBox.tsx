import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import UploadPicInfo from '../screens/UploadPicInfo';

interface ImageProps {
  handleImageInfo?: any;
  imageInfo: any;
}

const ImageUploadBox: React.FC<ImageProps> = ({handleImageInfo, imageInfo}) => {
  const bs = useRef<any>(null);

  const handleImageUpload = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeExif: true,
        forceJpg: true,
        waitAnimationEnd: false,
        compressImageQuality: 0.8,
        mediaType: 'photo',
      });
      if (image.mime === 'image/jpeg' || image.mime === 'image/png') {
        handleImageInfo(image.path);
      } else {
        Alert.alert('Invalid image format. Please select a JPEG or PNG image.');
      }
    } catch (error) {
      console.log(error);
    }

    if (bs.current) {
      bs.current.snapTo(1);
    }
  };

  const handleContainerPress = () => {
    handleImageInfo(null);
  };

  return (
    <TouchableOpacity onPress={handleImageUpload} style={styles.container}>
      <TouchableOpacity onPress={handleContainerPress}>
        {imageInfo ? (
          <Image source={{ uri: imageInfo }} style={styles.uploadedImage} />
        ) : (
          <Image source={require("../assets/icons/image-upload.png")} style={styles.uploadedImagePlaceholder} />
        )}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.uploadText}>{!UploadPicInfo ? "Click to upload an image of yourself here.":"Click to change the uploaded image."}</Text>
        <Text style={styles.supportText}>{!UploadPicInfo && "Supports JPEG, PNG"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#186FE7',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 60,
  },
  uploadedImage: {
    width: 100, // Adjust the size of the uploaded image as desired
    height: 100, // Adjust the size of the uploaded image as desired
    resizeMode: 'cover',
    marginBottom: 10,
  },
  uploadedImagePlaceholder: {
    width: 50, // Adjust the size of the uploaded image as desired
    height: 50, // Adjust the size of the uploaded image as desired
    resizeMode: 'cover',
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: '65%',
  },
  uploadText: {
    color: '#186FE7',
    fontSize: 16,
    marginBottom: 5,
    justifyContent: 'center',
    textAlign: 'center',
  },
  supportText: {
    color: '#186FE7',
    fontSize: 14,
  },
});

export default ImageUploadBox;