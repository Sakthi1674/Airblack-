import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const image = require('@/assets/images/IconSection.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Iconsection = () => {
  return (
    <ImageBackground source={image} style={styles.image} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>
          <MaterialCommunityIcons name="arrow-collapse-right" size={24} color="pink" /> 
          Why Should You Join AirBlack 
          <MaterialCommunityIcons name="arrow-collapse-left" size={24} color="pink" />
        </Text>
        
        <View style={styles.iconContainer}>
          <MaterialIcons name="video-camera-front" size={28} color="pink" />
          <Text style={styles.iconText}>Engaging Video Sessions</Text>
        </View>
        
        <View style={styles.iconContainer}>
          <Ionicons name="star-half-outline" size={28} color="pink" />
          <Text style={styles.iconText}>Expert Guidance</Text>
        </View>
        
        <View style={styles.iconContainer}>
          <FontAwesome5 name="users" size={28} color="pink" />
          <Text style={styles.iconText}>Community Support</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight * 0.5, // 50% of the screen height
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginTop:20,
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    width: '90%', // Ensure some padding on the sides
    alignItems: 'center',
  },
  title: {
    fontSize: Platform.OS === 'web' ? 30 : 25, // Slightly smaller for web
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    color: 'white',
    fontSize: Platform.OS === 'web' ? 18 : 16,
    marginLeft: 10,
  },
});

export default Iconsection;
