import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); 

const ZimojiScanner = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CameraPermission1'); 
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={[styles.middleImage, { width: width * 0.4, height: height * 0.2 }]} 
          resizeMode="contain"
        />

        <View style={styles.bottomLogoContainer}>
          <Image
            source={require('../assets/zimoLicense.png')}
            style={[styles.bottomLogo, { width: width * 0.25, height: height * 0.04 }]} 
            resizeMode="contain"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  middleImage: {
    position: 'absolute', 
    top: '50%', 
    left: '50%',
    marginTop: -(height * 0.2) / 2, 
    marginLeft: -(width * 0.4) / 2, 
  },
  bottomLogoContainer: {
    position: 'absolute', 
    bottom: 20, 
    width: '100%',
    alignItems: 'center',
  },
  bottomLogo: {
    width: width * 0.25,  
    height: height * 0.04, 
  },
});

export default ZimojiScanner;
