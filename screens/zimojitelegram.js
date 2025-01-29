import React from 'react';
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
  TextInput
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Zimojitelegram = () => {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  
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
    fontSize: 12 * scaleWidth, 
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.5,
    color: '#FFFFFF',
  });

  const getResponsiveFontSize = (baseSize) => {
    const scaleFactor = windowWidth / 414; 
    return Math.round(baseSize * scaleFactor);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Blur overlay */}
        <BlurView
          style={styles.absoluteFillBlur}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="black"
        />

        <View style={[styles.additionalImageContainer, { 
          position: 'absolute', 
          left: (windowWidth - (300 * scaleWidth)) / 2,
          top: 160 * scaleHeight, 
          width: 300 * scaleWidth, 
          height: 316 * scaleHeight 
        }]}>
          <Image 
            source={require('../assets/ZIMOJITG.png')} 
            style={styles.fullSize} 
            resizeMode="contain" 
          />
        </View>

        {/* New Image to Add Above the Blur */}
        <View style={[styles.newImageContainer, { 
          position: 'absolute', 
          left: 157.23 * scaleWidth, 
          top: 540 * scaleHeight, 
          width: 99.5 * scaleWidth, 
          height: 100 * scaleHeight 
        }]}>
          <Image 
            source={require('../assets/TG.png')} 
            style={styles.fullSize} 
            resizeMode="contain" 
          />
        </View>

        <View style={styles.header}>
          <TouchableOpacity 
            style={[styles.menuButton, { 
              left: 30 * scaleWidth, 
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

          {/* Original Logo Container */}
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
        </View>

        {/* new logoup on the blur effect*/}
        <View style={[styles.newView, { 
          width: scaleWidth * 88.17, 
          height: scaleHeight * 30,  
          top: scaleHeight * 30,      
        }]}>
          <Image 
            source={require('../assets/logo.png')} 
            style={styles.fullSize} 
            resizeMode="contain" 
          />
        </View>

        <View style={[styles.contactContainer, { 
          left: 30 * scaleWidth, 
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

        <View style={[styles.horizontalLinesContainer, { top: scaleHeight * 125 }]}>
          <TextInput 
            style={[styles.input, { width: scaleWidth * 350 }]} 
            placeholder="Your Name" 
            placeholderTextColor="#FFFFFF" 
          />
          <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
          <TextInput 
            style={[styles.input, { width: scaleWidth * 350 }]} 
            placeholder="Organization Name" 
            placeholderTextColor="#FFFFFF" 
          />
          <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
          <TextInput 
            style={[styles.input, { width: scaleWidth * 350 }]} 
            placeholder="Email" 
            placeholderTextColor="#FFFFFF" 
          />
          <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
          <TextInput 
            style={[styles.input, { width: scaleWidth * 350 }]} 
            placeholder="Subject" 
            placeholderTextColor="#FFFFFF" 
          />
          <View style={[styles.horizontalLine, { width: scaleWidth * 350 }]} />
        </View>

        <TouchableOpacity 
          style={[
            styles.messageTextContainer, 
            { 
              top: scaleHeight * 125 + scaleHeight * 250,
              width: scaleWidth * 350 
            }
          ]}
          onPress={() => {
            console.log('MESSAGE pressed');
          }}
        >
          <Text style={[
            getCommonTextStyle(), 
            styles.messageText,
            { fontSize: getResponsiveFontSize(12) } 
          ]}>
            MESSAGE
          </Text>
        </TouchableOpacity>

        {/* license and copyright text above blur */}
        <View style={styles.bottomLogoContainer}>
          <Image 
            source={require('../assets/zimoLicense.png')} 
            style={styles.bottomLogo} 
            resizeMode="contain"
          />
          <View style={styles.copyrightTextContainer}>
            <Text style={[styles.copyrightText, { fontSize: getResponsiveFontSize(9), letterSpacing: 1.3}]}>
              OFFICIAL ZIMOJI © COPYRIGHT 2024 ZIMO. ALL RIGHTS RESERVED.
            </Text>
          </View>
        </View>

        <View style={styles.sendMessageContainer}>
          <Text style={[styles.sendMessageText, getCommonTextStyle()]}>SEND MESSAGE</Text>
          <View style={styles.sendMessageIconsContainer}>
            <TouchableOpacity
             onPress={() => navigation.navigate('Zimojiwhatsapp')}>
              <Image 
                source={require('../assets/WhatsApp.png')}
                style={[styles.sendMessageIcon, { width: scaleWidth * 45, height: scaleHeight * 45 }]}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => navigation.navigate('Zimojitelegram')}>
              <Image 
                source={require('../assets/TG.png')}
                style={[styles.sendMessageIcon, { width: scaleWidth * 45, height: scaleHeight * 45 }]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.emailText, getCommonTextStyle()]}>HELLO@ZIMOJI.ORG</Text>
        </View>
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
      },
  absoluteFillBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 2, 
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
    zIndex: 3, 
  },
  newView: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -44 }],
    zIndex: 4, 
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
  additionalImageContainer: {
    position: 'absolute',
    zIndex: 5, 
  },
  newImageContainer: {
    position: 'absolute',
    left: 157.23,
    top: 602,
    width: 99.5,
    height: 100,
    zIndex: 6, 
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
    top:19,
    letterSpacing: 1.5,
    opacity: 0.7,
    right: 130,
  },
  bottomLogoContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? height * 0.05 : height * 0.03,
    paddingHorizontal: width * 0.05,
    zIndex: 7, 
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
    letterSpacing: 5.5,
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

export default Zimojitelegram; 