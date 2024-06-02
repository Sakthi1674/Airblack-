import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const image = require('@/assets/images/Footerimage.png');
const { width: screenWidth } = Dimensions.get('window');

const Footer = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Join Our Growing Community of 35,000+ Alumni</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Apply Now</Text>
        </TouchableOpacity>
        <View style={styles.iconsWrapper}>
          <View style={styles.iconContainer}>
            <Entypo name="instagram-with-circle" size={30} color="#d62976" />
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="facebook-with-circle" size={30} color="#1877F2" />
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="linkedin-with-circle" size={30} color="#0077B5" />
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="twitter-with-circle" size={30} color="#1DA1F2" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Platform.OS === 'web' ? 240 : 160, // Adjust height based on platform
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Platform.OS === 'web' ? 24 : 18, // Adjust font size based on platform
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    padding: 10,
    width: '90%',
  },
  buttonContainer: {
    backgroundColor: 'pink',
    padding: Platform.OS === 'web' ? 16 : 12, // Adjust padding based on platform
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
    width: '50%', // Make button width responsive
  },
  buttonText: {
    color: 'white',
    fontSize: Platform.OS === 'web' ? 18 : 14, // Adjust font size based on platform
    textAlign: 'center',
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});

export default Footer;
