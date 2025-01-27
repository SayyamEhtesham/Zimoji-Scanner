import React, { useState, useEffect } from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  useWindowDimensions,
  Platform,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Zimojicontact = () => {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const getScaleFactor = () => {
    const baseWidth = 414; 
    const baseHeight = 893; 
    return {
      width: windowWidth / baseWidth,
      height: windowHeight / baseHeight,
    };
  };

  const { width: scaleWidth, height: scaleHeight } = getScaleFactor();

  const getCommonTextStyle = () => ({
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.5,
    color: '#FFFFFF',
  });

  const getBoldTextStyle = () => ({
    fontSize: 10,
    fontFamily: 'Lato-Bold',
    letterSpacing: 5.5,
    color: '#FFFFFF',
  });

  const getResponsiveFontSize = (baseSize) => {
    const scaleFactor = windowWidth / 414;
    return Math.round(baseSize * scaleFactor);
  };

  const dynamicPaddingTop = scaleHeight * 140;

  // Calculate the position of the MESSAGE button
  const messageButtonTop = dynamicPaddingTop + scaleHeight * 250 + scaleHeight * 20; // Adjust the multiplier for spacing

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        enabled={!keyboardVisible}
      >
        <View style={styles.container}>
          <View style={[styles.header, { height: dynamicPaddingTop }]}>
            <TouchableOpacity 
              style={[styles.menuButton, { 
                left: 30, 
                top: scaleHeight * 30,
                width: scaleWidth * 22, 
                height: scaleHeight * 22 
              }]}
              onPress={() => navigation.navigate('Zimojimenu')}
            >
              <Image 
                source={require('../assets/MenuZimoji.png')} 
                style={styles.fullSize} 
                resizeMode="contain" 
              />
            </TouchableOpacity>

            <View style={[styles.logoContainer, { 
              width: scaleWidth * 88.17, 
              height: scaleHeight * 22 
            }]}>
              <Image 
                source={require('../assets/logo.png')} 
                style={styles.fullSize} 
                resizeMode="contain" 
              />
            </View>

            <View style={[styles.contactContainer, { 
              left: 30, 
              top: scaleHeight * 90 
            }]}>
              <Image 
                source={require('../assets/Contact.png')} 
                style={[styles.contactImage, { 
                  width: scaleWidth * 22, 
                  height: scaleHeight * 22 
                }]} 
                resizeMode="contain" 
              />
              <Text style={[styles.contactText, getCommonTextStyle(), { marginLeft: 22 }]}>CONTACT</Text>
            </View>

            <View style={[styles.horizontalLinesContainer, { 
              top: scaleHeight * 125,
              zIndex: keyboardVisible ? 999 : 1
            }]}>
              <TextInput 
                style={[styles.input, { width: scaleWidth * 350, textAlign: 'center' }]} 
                placeholder="YOUR NAME"
                placeholderTextColor="#FFFFFF" 
                autoCapitalize="characters"
                onFocus={() => setKeyboardVisible(true)}
              />
              <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
              <TextInput 
                style={[styles.input, { width: scaleWidth * 350, textAlign: 'center' }]} 
                placeholder="COMPANY/ORGANIZATION (OPTIONAL)"
                placeholderTextColor="#FFFFFF" 
                autoCapitalize="characters"
                onFocus={() => setKeyboardVisible(true)}
              />
              <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
              <TextInput 
                style={[styles.input, { width: scaleWidth * 350, textAlign: 'center' }]} 
                placeholder="EMAIL"
                placeholderTextColor="#FFFFFF" 
                autoCapitalize="none"
                onFocus={() => setKeyboardVisible(true)}
              />
              <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
              <TextInput 
                style={[styles.input, { width: scaleWidth * 350, textAlign: 'center' }]} 
                placeholder="SUBJECT"
                placeholderTextColor="#FFFFFF" 
                autoCapitalize="characters"
                onFocus={() => setKeyboardVisible(true)}
              />
              <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
            </View>

            <TouchableOpacity 
              style={[
                styles.messageTextContainer, 
                { 
                  top: messageButtonTop, // Use calculated top position
                  width: scaleWidth * 350,
                }
              ]}
              onPress={() => {
                Keyboard.dismiss();
                console.log('MESSAGE pressed');
              }}
            >
              <Text style={[
                getBoldTextStyle(),
                styles.messageText,
                { fontSize: getResponsiveFontSize(12) }
              ]}>
                MESSAGE
              </Text>
            </TouchableOpacity>
          </View>

          {!keyboardVisible && (
            <>
              <View style={styles.bottomLogoContainer}>
                <Image 
                  source={require('../assets/zimoLicense.png')} 
                  style={styles.bottomLogo} 
                  resizeMode="contain"
                />
                <View style={styles.copyrightTextContainer}>
                  <Text style={[styles.copyrightText, { fontSize: getResponsiveFontSize(9), letterSpacing: 1.3 }]}>
                    OFFICIAL ZIMOJI © COPYRIGHT 2024 ZIMO. ALL RIGHTS RESERVED.
                  </Text>
                </View>
              </View>

              <View style={styles.sendMessageContainer}>
                <TouchableOpacity onPress={() => console.log('Send Message pressed')}>
                  <Text style={[styles.sendMessageText, getCommonTextStyle()]}>SEND MESSAGE</Text>
                </TouchableOpacity>
                <View style={styles.sendMessageIconsContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Zimojiwhatsapp')}>
                    <Image 
                      source={require('../assets/WhatsApp.png')}
                      style={[styles.sendMessageIcon, { width: scaleWidth * 45, height: scaleHeight * 45 }]}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Zimojitelegram')}>
                    <Image 
                      source={require('../assets/TG.png')}
                      style={[styles.sendMessageIcon, { width: scaleWidth * 45, height: scaleHeight * 45 }]}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={[styles.emailText, getCommonTextStyle()]}>HELLO@ZIMOJI.ORG</Text>
              </View>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
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
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#000',
  },
  menuButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -44 }],
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
  contactContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactImage: {
    width: 22,
    height: 22,
  },
  contactText: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.5,
    color: '#FFFFFF',
    marginLeft: 14,
  },
  horizontalLinesContainer: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 4,
  },
  input: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center', 
  },
  messageTextContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  },
  messageText: {
    marginTop: 4,
    letterSpacing: 1.5,
    opacity: 1,
    textAlign: 'left', // Align text to the start
    alignSelf: 'flex-start', // Ensures alignment within its container
  },
  bottomLogoContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? height * 0.05 : height * 0.03,
    paddingHorizontal: width * 0.05,
  },
  bottomLogo: {
    width: width * 0.25,
    height: height * 0.04,
  },
  sendMessageContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? height * 0.13 : height * 0.11,
    alignItems: 'center',
    width: '100%',
  },
  sendMessageText: {
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    letterSpacing: 6.6,
    marginBottom: 40,
  },
  sendMessageIconsContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  sendMessageIcon: {
    marginHorizontal: 40,
  },
  emailText: {
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.2,
    opacity: 0.8,
  },
  copyrightTextContainer: {
    position: 'absolute',
    bottom: -22,
    width: '110%',
    alignItems: 'center',
  },
  copyrightText: {
    fontFamily: 'Lato-Regular',
    color: '#FFFFFF',
    opacity: 1,
    textAlign: 'center',
  },
});

export default Zimojicontact;