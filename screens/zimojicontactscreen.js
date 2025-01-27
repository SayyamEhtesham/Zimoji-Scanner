import React from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Zimojicontactscreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const calculateFontSize = (baseSize) => {
    const scaleFactor = Math.min(windowWidth / 375, windowHeight / 812);
    return baseSize * scaleFactor;
  };

  const getCommonTextStyle = () => ({
    fontSize: calculateFontSize(12),
    fontFamily: 'Lato-Regular',
    letterSpacing: windowWidth * 0.004,
    color: '#FFFFFF',
  });

  const dynamicPaddingTop = windowHeight * 0.12;

  const renderActionIcons = () => (
    <View style={styles.imagesRow}>
      <TouchableOpacity>
        <Image 
          source={require('../assets/AddContact.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../assets/Callicon.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../assets/ContactM.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../assets/Location.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../assets/Favourite.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../assets/ShareIcon.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../assets/CopyIcon.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
          source={require('../assets/Delete.png')} 
          style={styles.actionIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
    </View>
  );

  const renderUrlItem = (url, title, dateTime, isBlurred = false) => (
    <View style={[styles.urlContainer, { marginTop: windowHeight * 0.01 }]}>
      <View style={styles.contentContainer}>
        <View style={styles.typeContainer}>
          <Image 
            source={require('../assets/URL.png')} 
            style={[styles.typeIcon, { 
              width: windowWidth * 0.025, 
              height: windowWidth * 0.025 
            }]} 
            resizeMode="contain"
          />
          <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: windowWidth * 0.02 }]}>URL</Text>
        </View>
        <Text style={[styles.urlLink, getCommonTextStyle()]} numberOfLines={1}>{url}</Text>
        <Text style={[styles.urlTitle, getCommonTextStyle()]} numberOfLines={2}>{title}</Text>
        <Text style={[styles.dateTime, getCommonTextStyle()]}>{dateTime}</Text>
        {isBlurred && (
          <BlurView
            style={styles.contentBlur}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="black"
            overlayColor="rgba(0, 0, 0, 0.3)"
          />
        )}
      </View>
    </View>
  );

  const renderTextItem = (isBlurred = false) => (
    <View style={[styles.urlContainer, { marginTop: windowHeight * 0.01 }]}>
      <View style={styles.contentContainer}>
        <View style={styles.typeContainer}>
          <Image 
            source={require('../assets/Text.png')} 
            style={[styles.typeIcon, { 
              width: windowWidth * 0.025, 
              height: windowWidth * 0.025 
            }]} 
            resizeMode="contain"
          />
          <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: windowWidth * 0.02 }]}>TEXT</Text>
        </View>
        <Text 
          style={[styles.textContent, getCommonTextStyle()]}
          numberOfLines={4}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo fringilla libero, eget congue justo. Aliquam dignissim, libero sit amet ultrices eleifend, libero neque gravida eros, in facilisis orci velit at nisl.
        </Text>
        <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 11:36</Text>
        {isBlurred && (
          <BlurView
            style={styles.contentBlur}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="black"
            overlayColor="rgba(0, 0, 0, 0.3)"
          />
        )}
      </View>
    </View>
  );

  const renderContactItem = (isBlurred = false) => (
    <View style={[styles.urlContainer, { marginTop: windowHeight * 0.01 }]}>
      <View style={styles.contentContainer}>
        <View style={styles.typeContainer}>
          <Image 
            source={require('../assets/ContactUSER.png')} 
            style={[styles.typeIcon, { 
              width: windowWidth * 0.03, 
              height: windowWidth * 0.03 
            }]} 
            resizeMode="contain"
          />
          <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: windowWidth * 0.02 }]}>CONTACT</Text>
        </View>
        <Text style={[styles.contactName, getCommonTextStyle()]}>Michael Jackson</Text>
        <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO AMBASSADOR</Text>
        <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO GROUPS</Text>
        <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 09:15</Text>
        {isBlurred && (
          <BlurView
            style={styles.contentBlur}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="black"
            overlayColor="rgba(0, 0, 0, 0.3)"
          />
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.header, { height: dynamicPaddingTop }]}>
          <TouchableOpacity 
            style={[styles.menuButton, { 
              left: windowWidth * 0.07,
              top: windowHeight * 0.04,
              width: windowWidth * 0.05,
              height: windowHeight * 0.03
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
            width: windowWidth * 0.22,
            height: windowHeight * 0.03
          }]}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.fullSize} 
              resizeMode="contain" 
            />
          </View>

          <View style={[styles.historyContainer, { 
            left: windowWidth * 0.07,
            top: windowHeight * 0.1
          }]}>
            <Image 
              source={require('../assets/History.png')} 
              style={[styles.historyImage, { 
                width: windowWidth * 0.05,
                height: windowHeight * 0.03
              }]} 
              resizeMode="contain" 
            />
            <Text style={[styles.historyText, getCommonTextStyle(), { marginLeft: windowWidth * 0.05 }]}>HISTORY</Text>
          </View>
        </View>

        <ScrollView 
          style={[styles.scrollContainer, { 
            paddingTop: dynamicPaddingTop,
            marginTop: windowHeight * 0.03
          }]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.urlContainer, { marginTop: windowHeight * 0.01 }]}>
            <View style={styles.contentContainer}>
              <View style={[styles.typeContainer, { marginBottom: windowHeight * 0.005 }]}>
                <Image 
                  source={require('../assets/ContactUSER.png')} 
                  style={[styles.typeIcon, { 
                    width: windowWidth * 0.025,
                    height: windowWidth * 0.025
                  }]} 
                  resizeMode="contain"
                />
                <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: windowWidth * 0.02 }]}>CONTACT</Text>
              </View>
              <View style={styles.contactInfoContainer}>
                <Text style={[styles.contactName, getCommonTextStyle(), { 
                  marginBottom: windowHeight * 0.007,
                  fontWeight: '700'
                }]}>Michael Jackson</Text>
                <Text style={[styles.contactTitle, getCommonTextStyle(), { 
                  marginBottom: windowHeight * 0.007
                }]}>ZIMO AMBASSADOR</Text>
                <Text style={[styles.contactTitle, getCommonTextStyle(), styles.lineSpacing]}>ZIMO GROUP</Text>
                <Text style={[styles.contactTitle, getCommonTextStyle(), styles.lineSpacing]}>
                  University of Oxford (Oxford, United Kingdom)
                </Text>
                <Text style={[styles.contactDetails, getCommonTextStyle(), styles.lineSpacing]}>
                  71-75 Shelton Street, Covent Garden, London,{"\n"}
                  WC2H 9JQ, England, United Kingdom
                </Text>
                <Text style={[styles.contactDetails, getCommonTextStyle(), styles.lineSpacing]}>+447867867867</Text>
                <Text style={[styles.contactDetails, getCommonTextStyle(), styles.lineSpacing]}>
                  michael.jackson@zimogroup.org
                </Text>
                <Text style={[styles.contactDetails, getCommonTextStyle(), styles.lineSpacing]}>
                  https://zimo.team/ambassador
                </Text>
                <Text style={[styles.textContent, getCommonTextStyle(), styles.lineSpacing]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo fringilla libero, 
                  eget congue justo. Aliquam dignissim, dui ante. Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. In commodo libero, eget congue justo.
                </Text>
                <Text style={[styles.dateTime, getCommonTextStyle(), { 
                  marginTop: windowHeight * 0.0001,
                  opacity: 0.5 
                }]}>13/09/2024 | 09:15</Text>
              </View>
            </View>
            {renderActionIcons()}
          </View>
          
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
  contactInfoContainer: {
    marginTop: hp('0.5%'),
  },
  lineSpacing: {
    marginBottom: Dimensions.get('window').height * 0.015,
    lineHeight: Dimensions.get('window').width * 0.04,
  },
  contactName: {
    fontSize: wp('2.5%'),
  },
  contactTitle: {
    fontSize: wp('2.5%'),
  },
  contactDetails: {
    fontSize: wp('2.5%'),
    color: '#FFFFFF',
    opacity: 0.8
  },
  textContent: {
    fontSize: wp('2.5%'),
    paddingRight: wp('5%'),
    marginTop: hp('1%'),
  },
  dateTime: {
    fontSize: wp('2.5%'),
    marginTop: hp('1.3%'),
    marginBottom: hp('1.5%'),
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
    paddingHorizontal: Dimensions.get('window').width * 0.08,
    paddingEnd: Dimensions.get('window').width * 0.03,
  },
  menuButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.11 }],
    top: Dimensions.get('window').height * 0.037,
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
    paddingBottom: Dimensions.get('window').height * 0.002,
    position: 'relative',
    marginTop: Dimensions.get('window').height * 0.003,
  },
  contentContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.002,
  },
  urlContainer: {
    paddingBottom: Dimensions.get('window').height * 0.002,
    position: 'relative',
    marginTop: Dimensions.get('window').height * 0.003,
  },
  contentContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.002,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: Dimensions.get('window').height * 0.009,
    marginBottom: Dimensions.get('window').height * 0.003,
    zIndex: 3,
  },
  actionIcon: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.058,
    marginRight: Dimensions.get('window').width * 0.058,
  },
  contentBlur: {
    position: 'absolute',
    top: 0,
    left: -50,
    right: -50,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 2,
  },
  typeIcon: {
    width: Dimensions.get('window').width * 0.026,
    height: Dimensions.get('window').width * 0.026,
  }
});

export default Zimojicontactscreen;