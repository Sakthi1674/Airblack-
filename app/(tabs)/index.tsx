import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, View, Text, ImageBackground, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Form from '@/components/Form';
import Iconsection from '@/components/Iconsection';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Footer from '@/components/Footer';
import { Entypo } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';

const { width: screenWidth } = Dimensions.get('window');
const headerImage = require('@/assets/images/Topimage.png'); 
const Certificate = require('@/assets/images/Certificate.png'); 
const lottieAnimation = require('@/assets/images/Lottie.json'); 

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    return () => clearTimeout(fakeLoading); 
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            source={lottieAnimation}
            autoPlay
            loop={false}
            speed={3.5}
            style={styles.animation}
          />
        </View>
      ) : (
        <ParallaxScrollView
          headerBackgroundColor={{ light: 'white', dark: 'dark' }}
          headerImage={<Image source={headerImage} style={styles.reactLogo} />}
        >
          <View style={styles.container}>
            <Text style={styles.courseTitle}>Professional Online</Text>
            <Text style={styles.courseTitle}>Makeup Course</Text>
            <Text style={styles.textContainer1}>
              <MaterialCommunityIcons name="certificate-outline" size={24} color="black" />
              Certification Programme
            </Text>
            <Text style={styles.text1}>
              <Entypo name="star" size={24} color="yellow" />
              Rated 4.85/5
            </Text>
            <Text style={styles.courseDetail}>
              <AntDesign name="checkcircleo" size={24} color="White" />
              India's No.1 Online Makeup Course
            </Text>
            <Text style={styles.courseDetail}>
              <AntDesign name="checkcircleo" size={24} color="White" />
              Learn by LIVE Do-it-Together Classes
            </Text>
            <Text style={styles.courseDetail}>
              <AntDesign name="checkcircleo" size={24} color="White" />
              Unlimited Practice Session to master skills
            </Text>
          </View>
          <Form />
          <Iconsection />
            <Text style={styles.certificationTitle}>
              <MaterialCommunityIcons name="arrow-collapse-right" size={50} color="pink" />
              Get Certified from India's Biggest Beauty Platform
              <MaterialCommunityIcons name="arrow-collapse-left" size={50} color="pink" />
            </Text>
          <View style={styles.section1}>
            <Image source={Certificate} style={styles.exampleImage} />
          </View>
          <Footer />
        </ParallaxScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, // Added padding to avoid text overlapping with the bottom
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  
  },
  reactLogo: {
    width: screenWidth,
    height: 200,
  },
  textContainer1: {
    backgroundColor: 'gray', 
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Text color for better visibility
  },
  text1: {
    color: 'gray', // Set text color to white
    fontSize: 16,
    fontWeight: 'bold', 
  },
  courseTitle: {
    color: 'gray', // Set text color to white
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  courseDetail: {
    color: 'grey', // Set text color to white
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 4,
    width: '90%',
  },
  certificationTitle: {
    fontSize: Platform.OS === 'web' ? 30 : 20, // Adjusted size for web and mobile
    textAlign: 'center',
    fontWeight:'bold'
  },
  section: {
    width: '90%',
    top: 5,
    alignSelf: 'center',
    alignItems: 'center',
  },
  section1: {
    width: '90%',
    top: 5,
    alignSelf: 'center',
    alignItems: 'center',
  },
  exampleImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  animation: {
    width: '100%', 
    height: '100%',
  },
});

