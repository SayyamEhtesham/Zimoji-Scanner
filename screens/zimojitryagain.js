import React, { useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleWidth = SCREEN_WIDTH / 414;  
const scaleHeight = SCREEN_HEIGHT / 893; 

const scaleSize = (size) => size * scaleWidth;
const scaleVertical = (size) => size * scaleHeight;

const Zimojitryagain = () => {
  const navigation = useNavigation();

  // Adjust the size of the "Try Again" button
  const tryAgainWidth = scaleSize(250);
  const tryAgainHeight = scaleSize(125);

  const centerLeft = (SCREEN_WIDTH - tryAgainWidth) / 2;
  const centerTop = (SCREEN_HEIGHT - tryAgainHeight) / 2;

  // Animation setup
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000, 
      easing: Easing.out(Easing.cubic), 
      useNativeDriver: true
    }).start();
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-SCREEN_HEIGHT, centerTop] 
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1] 
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={[styles.iconBase, { left: scaleSize(30), top: scaleVertical(30), width: scaleSize(22), height: scaleSize(22) }]}
          onPress={() => navigation.navigate('Zimojimenu')}
        >
          <Image source={require('../assets/MenuZimoji.png')} style={styles.fullSize} resizeMode="contain" />
        </TouchableOpacity>

        <View style={[styles.logoContainer, { left: scaleSize(163), top: scaleVertical(30), width: scaleSize(88.17), height: scaleSize(22) }]}>
          <Image source={require('../assets/logo.png')} style={styles.fullSize} resizeMode="contain" />
        </View>

        <TouchableOpacity 
          style={[styles.iconBase, { left: scaleSize(373.11), top: scaleVertical(30), width: scaleSize(9.78), height: scaleSize(22) }]}
        >
          <Image source={require('../assets/Flashoff.png')} style={styles.fullSize} resizeMode="contain" />
        </TouchableOpacity>

        <Animated.View 
          style={[
            styles.tryAgainContainer, 
            { 
              left: centerLeft, 
              width: tryAgainWidth, 
              height: tryAgainHeight,
              transform: [{ translateY }],
              opacity
            }
          ]}
        >
          <Image source={require('../assets/TryAgain.png')} style={styles.fullSize} resizeMode="contain" />
        </Animated.View>

        <TouchableOpacity 
          style={[styles.iconBase, { right: scaleSize(30), bottom: scaleSize(30), width: scaleSize(22), height: scaleSize(22) }]}
        >
          <Image source={require('../assets/FlipCamera.png')} style={styles.fullSize} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-start', 
  },
  iconBase: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

export default Zimojitryagain;