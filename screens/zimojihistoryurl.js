import React from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  useWindowDimensions 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

const Zimojihistoryurl = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  
  const getScaleFactor = () => {
    const baseWidth = 414; 
    const baseHeight = 893; 
    return {
      width: width / baseWidth,
      height: height / baseHeight,
    };
  };

  const scale = getScaleFactor();
  const scaleSize = (size) => size * scale.width;
  const scaleVertical = (size) => size * scale.height;

  const getCommonTextStyle = () => ({
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.5,
    color: '#FFFFFF',
  });

  const dynamicPaddingTop = scaleVertical(140);

  const renderUrlItem = (url, title, dateTime, isFirstItem = false, isBlurred = false) => (
    <View style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}>
      <View style={styles.typeContainer}>
        <Image 
          source={require('../assets/URL.png')} 
          style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]} 
          resizeMode="contain"
        />
        <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: 8 }]}>URL</Text>
      </View>
      <Text style={[styles.urlLink, getCommonTextStyle()]} numberOfLines={1}>{url}</Text>
      <Text style={[styles.urlTitle, getCommonTextStyle()]} numberOfLines={2}>{title}</Text>
      <Text style={[styles.dateTime, getCommonTextStyle()]}>{dateTime}</Text>
      {isFirstItem && (
        <View style={styles.imagesRow}>
          <Image source={require('../assets/FavouriteYello.png')} style={styles.actionImage} resizeMode="contain" />
          <Image source={require('../assets/ShareIcon.png')} style={styles.actionImage} resizeMode="contain" />
          <Image source={require('../assets/CopyIcon.png')} style={styles.actionImage} resizeMode="contain" />
          <Image source={require('../assets/Delete.png')} style={styles.actionImage} resizeMode="contain" />
        </View>
      )}
      {isBlurred && (
        <BlurView
          style={styles.absoluteBlur}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="black"
          overlayColor="rgba(0, 0, 0, 0.3)"
        />
      )}
    </View>
  );

  const renderTextItem = (isBlurred = false) => (
    <View style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}>
      <View style={styles.typeContainer}>
        <Image 
          source={require('../assets/Text.png')} 
          style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]} 
          resizeMode="contain"
        />
        <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: 8 }]}>TEXT</Text>
      </View>
      <Text 
        style={[styles.textContent, getCommonTextStyle()]}
        numberOfLines={3}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo fringilla libero, eget congue justo. Aliquam dignissim, libero sit amet ultrices eleifend, libero neque gravida eros, in facilisis orci velit at nisl.
      </Text>
      <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 11:36</Text>
      {isBlurred && (
        <BlurView
          style={styles.absoluteBlur}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="black"
          overlayColor="rgba(0, 0, 0, 0.3)"
        />
      )}
    </View>
  );

  const renderContactItem = (isBlurred = false) => (
    <View style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}>
      <View style={styles.typeContainer}>
        <Image 
          source={require('../assets/ContactUSER.png')} 
          style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]} 
          resizeMode="contain"
        />
        <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: 8 }]}>CONTACT</Text>
      </View>
      <Text style={[styles.contactName, getCommonTextStyle()]}>Michael Jackson</Text>
      <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO AMBASSADOR</Text>
      <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO GROUPS</Text>
      <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 09:15</Text>
      {isBlurred && (
        <BlurView
          style={styles.absoluteBlur}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="black"
          overlayColor="rgba(0, 0, 0, 0.3)"
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.header, { height: dynamicPaddingTop }]}>
          <View 
            style={[styles.menuButton, { 
              left: 30, 
              top: scaleVertical(30),
              width: scaleSize(22), 
              height: scaleSize(22) 
            }]}
            onPress={() => navigation.navigate('Zimojimenu')}
          >
            <Image 
              source={require('../assets/MenuZimoji.png')} 
              style={styles.fullSize} 
              resizeMode="contain" 
            />
          </View>

          <View style={[styles.logoContainer, { 
            width: scaleSize(88.17), 
            height: scaleSize(22) 
          }]}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.fullSize} 
              resizeMode="contain" 
            />
          </View>

        <View style={[styles.historyContainer, { 
                    left: 30, 
                    top: scaleVertical(90) 
                  }]}>
                    <Image 
                      source={require('../assets/History.png')} 
                      style={[styles.historyImage, { 
                        width: scaleSize(22), 
                        height: scaleSize(22) 
                      }]} 
                      resizeMode="contain" 
                    />
                    <Text style={[styles.historyText, getCommonTextStyle(), { marginLeft: 16 }]}>HISTORY</Text>
                  </View>
        </View>

        <ScrollView 
          style={[styles.scrollContainer, { paddingTop: dynamicPaddingTop }]}
          showsVerticalScrollIndicator={false}
        >
          {renderUrlItem(
            'https://ztfr.org',

            'ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |Share Photos | Storage | Up to 1TB | FREE',
            '16/09/2024 | 09:10',
            true,
            false
          )}
          
          {renderUrlItem(
            'https://zimomeet.com',
            'ZIMOMEET® | ZM® | Premium Video Meetings | Instant\nMeetings | Share Videos | No Registration | Free-to-use\nand Unlimited',
            '15/09/2024 | 11:57',
            false,
            true
          )}
          {renderUrlItem(
            'https://ztfr.org',
            'ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE',
            '13/09/2024 | 16:15',
            false,
            true
          )}
          {renderTextItem(true)}
          {renderContactItem(true)}
        </ScrollView>
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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical:25,
    marginTop:-2,
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
  historyContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  urlContainer: {
    paddingBottom: 5,
    position: 'relative',
    overflow: 'hidden',
    marginTop:4,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  urlTypeText: {
    marginBottom: 2,
  },
  urlLink: {
    marginBottom: 12,
    
  },
  urlTitle: {
    lineHeight: 12,
    marginBottom: 2,
    paddingRight: 15,
  },
  dateTime: {
    marginTop: 6,
    marginBottom: 8,
    color: '#FFFFFF',
  },
  textContent: {
    lineHeight: 12,
    marginBottom: 2,
    paddingRight: 15,
  },
  contactName: {
    marginBottom: 2,
  },
  contactTitle: {
    marginBottom: 2,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 5,
  },
  actionImage: {
    width: 19,
    height: 22,
    marginRight: 34,
  },
  typeIcon: {
    width: 10,
    height: 10,
  },
  absoluteBlur: {
    position: 'absolute',
    top: 0,
    left: -50,
    right: -50,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 2,
  }
});

export default Zimojihistoryurl;