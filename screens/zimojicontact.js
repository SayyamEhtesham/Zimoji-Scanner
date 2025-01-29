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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Zimojicontact = () => {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messageHeight, setMessageHeight] = useState(100);
  const lineHeight = 20; // Adjust line height
  const maxLines = 34; // fix no of lines
  
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
    fontSize: 11,
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.5,
    color: '#FFFFFF',
  });

  const getResponsiveFontSize = (baseSize) => {
    const scaleFactor = windowWidth / 414;
    return Math.round(baseSize * scaleFactor);
  };

  const handleMessageChange = (text) => {
    const lines = text.split('\n');
    if (lines.length <= maxLines) {
      setMessageText(text);
      setMessageHeight(Math.min(maxLines * lineHeight, Math.max(100, lines.length * lineHeight)));
    } else {
      // Only allow the first 14 lines
      const truncatedText = lines.slice(0, maxLines).join('\n');
      setMessageText(truncatedText);
      setMessageHeight(maxLines * lineHeight);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          enabled={!keyboardVisible}
        >
          <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
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
                <Text style={[styles.contactText, getCommonTextStyle(), { marginLeft: 22, letterSpacing: 1.5 }]}>CONTACT</Text>
              </View>
            </View>

            <View style={styles.mainContent}>
              {/* Form Section with ScrollView */}
              <View style={styles.formSection}>
                <ScrollView 
                  contentContainerStyle={styles.formContainer}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                >
                  <View style={styles.horizontalLinesContainer}>
                    <TextInput 
                      style={[styles.input, { width: scaleWidth * 350, textAlign: 'center', letterSpacing: 1.2 }]} 
                      placeholder="YOUR NAME"
                      placeholderTextColor="#FFFFFF" 
                      autoCapitalize="characters"
                      onFocus={() => setKeyboardVisible(true)}
                    />
                    <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
                    
                    <TextInput 
                      style={[styles.input, { width: scaleWidth * 350, textAlign: 'center', letterSpacing: 1.2 }]} 
                      placeholder="COMPANY/ORGANISATION (OPTIONAL)"
                      placeholderTextColor="#FFFFFF" 
                      autoCapitalize="characters"
                      onFocus={() => setKeyboardVisible(true)}
                    />
                    <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
                    
                    <TextInput 
                      style={[styles.input, { width: scaleWidth * 350, textAlign: 'center', letterSpacing: 1.2 }]} 
                      placeholder="EMAIL"
                      placeholderTextColor="#FFFFFF" 
                      autoCapitalize="none"
                      onFocus={() => setKeyboardVisible(true)}
                    />
                    <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
                    
                    <TextInput 
                      style={[styles.input, { width: scaleWidth * 350, textAlign: 'center', letterSpacing: 1.2 }]} 
                      placeholder="SUBJECT"
                      placeholderTextColor="#FFFFFF" 
                      autoCapitalize="characters"
                      onFocus={() => setKeyboardVisible(true)}
                    />
                    <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
                    
                    <View style={styles.messageInputContainer}>
                      <TextInput 
                        style={[
                          styles.messageInput,
                          {
                            width: scaleWidth * 350,
                            height: messageHeight,
                            maxHeight: maxLines * lineHeight,
                            minHeight: lineHeight,
                            textAlignVertical: 'top',
                            letterSpacing: 1.2,
                          }
                        ]} 
                        placeholder="MESSAGE"
                        placeholderTextColor="#FFFFFF" 
                        multiline
                        value={messageText}
                        onChangeText={handleMessageChange}
                        onFocus={() => setKeyboardVisible(true)}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>

              {/* Bottom Section */}
              {!keyboardVisible && (
                <View style={styles.bottomContainer}>
                  <View style={styles.sendMessageContainer}>
                    <TouchableOpacity onPress={() => console.log('Send Message pressed')}>
                      <Text style={[styles.sendMessageText, getCommonTextStyle()]}>
                        SEND <Text style={[{ fontFamily: 'Lato-Bold', fontWeight: 'bold', fontSize: 11, letterSpacing: 1.5, color: '#FFFFFF' }]}>MESSAGE</Text>
                      </Text>
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
                  </View>
                </View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    height: 120,
    position: 'relative',
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
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formSection: {
    flex: 1,
    maxHeight: height * 0.55, 
    marginTop: -10,
  },
  formContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  horizontalLinesContainer: {
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
    fontFamily: 'Lato-Regular',
  },
  messageInputContainer: {
    marginVertical: 4,
  },
  messageInput: {
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlign: 'left',
    fontFamily: 'Lato-Regular',
  },
  bottomContainer: {
    width: '100%',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  sendMessageContainer: {
    alignItems: 'center',
    width: '100%',
  },
  sendMessageText: {
    fontSize: 10,
    letterSpacing: 6.6,
    marginBottom: 30,
  },
  sendMessageIconsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
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
  bottomLogoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomLogo: {
    width: width * 0.25,
    height: height * 0.04,
  },
  copyrightTextContainer: {
    marginTop: 20,
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