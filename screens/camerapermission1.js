import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const CameraPermissionScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logoTop} 
          resizeMode="contain"
        />
      </View>

      <View style={styles.cameraIconContainer}>
        <Image 
          source={require('../assets/Camera.png')} 
          style={styles.cameraIcon} 
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>
        <Text style={styles.bold}>CAMERA ACCESS IS REQUIRED</Text>
        </Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            THIS APP NEEDS <Text style={styles.bold}>PERMISSION</Text>  TO USE THE
          </Text>
          <Text style={styles.description}>
            CAMERA FOR ZIMOJI SCANNING.
          </Text>
        </View>

        <View style={styles.permissionContainer}>
          <Text style={styles.description}>
            TO USE THE APP PLEASE ENABLE <Text style={styles.bold}>CAMERA</Text> 
          </Text>
          <Text style={styles.description}>
          <Text style={styles.bold}>PERMISSIONS</Text>  TO ALLOW ZIMOJI SCANNING.
          </Text>
        </View>

        <View style={styles.scanIconContainer}>
          <Image 
            source={require('../assets/scanIcon.png')} 
            style={styles.scanIcon} 
            resizeMode="contain"
          />
        </View>

        <View style={styles.grantContainer}>
          <Text style={styles.description}>
            GRANT CAMERA ACCESS TO ENSURE THE APP'S
          </Text>
          <Text style={styles.description}>
            CAMERA FUNCTIONALITY AND SCAN ZIMOJIS.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
          >
            <Image 
              source={require('../assets/Cancel.png')} 
              style={styles.buttonImage} 
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Zimojiscannerpage')
            }

          >
            <Image 
              source={require('../assets/Allow.png')} 
              style={styles.buttonImage} 
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          YOU WILL BE DIRECTED TO THE APP PERMISSIONS SECTION.
        </Text>
      </View>

      <View style={styles.bottomLogoContainer}>
        <Image 
          source={require('../assets/zimoLicense.png')} 
          style={styles.bottomLogo} 
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? height * 0.06 : height * 0.04,
    paddingHorizontal: width * 0.05,
  },
  logoTop: {
    width: width * 0.3,
    height: height * 0.025,
  },
  cameraIconContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  cameraIcon: {
    width: width * 0.12,
    height: width * 0.12,
    tintColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.03,
  },
  title: {
    color: 'white',
    fontSize: 13, 
    letterSpacing: 4.5, 
    lineHeight: 26, 
    marginBottom: height * 0.03,
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: height * 0.025,
  },
  permissionContainer: {
    alignItems: 'center',
    marginBottom: height * 0.025,
  },
  description: {
    color: 'white',
    fontSize: 10, 
    fontFamily: 'Lato-Regular',
    letterSpacing:2,
    textAlign: 'center',
    lineHeight: 23,
  },
  scanIconContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
    marginVertical: height * 0.025,
  },
  scanIcon: {
    width: width * 0.15,
    height: width * 0.15,
  },
  grantContainer: {
    alignItems: 'center',
    marginBottom: height * 0.025,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.025,
    paddingHorizontal: width * 0.1,
  },
  button: {
    marginHorizontal: width * 0.06,
  },
  buttonImage: {
    width: width * 0.16,
    height: height * 0.022,
  },
  footer: {
    color: 'white',
    fontSize: 11, 
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    opacity: 0.8,
    letterSpacing:1.2,

  },
  
  bold: {
    fontWeight: 'bold',
    color: 'white',
  },
  bottomLogoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? height * 0.05 : height * 0.03,
    paddingHorizontal: width * 0.05,
  },
  bottomLogo: {
    width: width * 0.25,
    height: height * 0.04,
  },
});

export default CameraPermissionScreen1;
