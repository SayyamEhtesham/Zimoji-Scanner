import React from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Zimojitextscreen = () => {
  const navigation = useNavigation();

  const getCommonTextStyle = () => ({
    fontSize: wp('3.5%'),  
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.7,
    color: '#FFFFFF',
  });

  const dynamicPaddingTop = hp('12%');  

  const renderActionIcons = () => (
    <View style={styles.imagesRow}>
      <TouchableOpacity>
        <Image 
          source={require('../assets/FavouriteYello.png')} 
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
    <View style={[styles.urlContainer, { marginTop: hp('1%') }]}>
      <View style={styles.contentContainer}>
        <View style={styles.typeContainer}>
          <Image 
            source={require('../assets/URL.png')} 
            style={[styles.typeIcon, { width: wp('2.5%'), height: wp('2.5%') }]} 
            resizeMode="contain"
          />
          <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: wp('2%') }]}>URL</Text>
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
    <View style={[styles.urlContainer, { marginTop: hp('1%') }]}>
      <View style={styles.contentContainer}>
        <View style={styles.typeContainer}>
          <Image 
            source={require('../assets/Text.png')} 
            style={[styles.typeIcon, { width: wp('2.5%'), height: wp('2.5%') }]} 
            resizeMode="contain"
          />
          <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: wp('2%') }]}>TEXT</Text>
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
    <View style={[styles.urlContainer, { marginTop: hp('1%') }]}>
      <View style={styles.contentContainer}>
        <View style={styles.typeContainer}>
          <Image 
            source={require('../assets/ContactUSER.png')} 
            style={[styles.typeIcon, { width: wp('2.5%'), height: wp('2.5%') }]} 
            resizeMode="contain"
          />
          <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: wp('2%') }]}>CONTACT</Text>
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
              left: wp('7%'), 
              top: hp('4%'),
              width: wp('5%'), 
              height: hp('3%') 
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
            width: wp('22%'), 
            height: hp('3%') 
          }]}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.fullSize} 
              resizeMode="contain" 
            />
          </View>

          <View style={[styles.historyContainer, { 
            left: wp('7%'), 
            top: hp('10%') 
          }]}>
            <Image 
              source={require('../assets/History.png')} 
              style={[styles.historyImage, { 
                width: wp('5%'), 
                height: hp('3%') 
              }]} 
              resizeMode="contain" 
            />
            <Text style={[styles.historyText, { fontSize: 12, color: '#FFFFFF' }, { marginLeft: wp('5%') }]}>HISTORY</Text>
          </View>
        </View>

        <ScrollView 
          style={[styles.scrollContainer, { 
            paddingTop: dynamicPaddingTop,
            marginTop: hp('3%') 
          }]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.urlContainer, { marginTop: hp('1%') }]}>
            <View style={styles.contentContainer}>
              <View style={styles.typeContainer}>
                <Image 
                  source={require('../assets/Text.png')} 
                  style={[styles.typeIcon, { width: wp('2.5%'), height: wp('2.5%') }]} 
                  resizeMode="contain"
                />
                <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: wp('2%') }]}>TEXT</Text>
              </View>
              <Text 
                style={[styles.textContent, getCommonTextStyle()]}
                numberOfLines={13}
              >
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo fringilla libero, eget congue justo. Aliquam dignissim, libero sit amet ultrices pharetra, libero neque rhoncus nisl, sed tempor diam nisl et ligula. Praesent gravida, magna eget hendrerit dignissim, dui ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo fringilla libero, eget congue justo. Aliquam dignissim, libero sit amet ultrices pharetra, libero neque rhoncus nisl, sed tempor diam nisl et ligula. Praesent gravida, magna eget hendrerit dignissim, dui ante.
              </Text>
              <Text style={[styles.dateTime, getCommonTextStyle(), { marginTop: hp('1%'), opacity: 0.5 }]}>
                13/09/2024 | 11:36
              </Text>
            </View>
            {renderActionIcons()}
          </View>
          {renderUrlItem(
            'https://zimomeet.com',
            'ZIMOMEET® | ZM® | Premium Video Meetings | Instant\nMeetings | Share Videos | No Registration | Free-to-use\nand Unlimited',
            '15/09/2024 | 11:57',
            true,
            true
          )}
          {renderUrlItem(
            'https://ztfr.org',
            'ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE',
            '13/09/2024 | 16:15',
            true,
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
    paddingEnd: 12,
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
    paddingBottom: 2,
    position: 'relative',
    marginTop: 3,
  },
  contentContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  urlTypeText: {
    marginBottom: 1,
  },
  urlLink: {
    marginBottom: 1,
  },
  urlTitle: {
    lineHeight: 11,
    marginBottom: 1,
    paddingRight: 15,
  },
  dateTime: {
    marginTop: 4,
    marginBottom: 6,
    color: '#FFFFFF',
  },
  textContent: {
    lineHeight: 12,
    marginBottom: -1,
    paddingRight: 26,
    marginTop: 4,
  },
  contactName: {
    marginBottom: 1,
  },
  contactTitle: {
    marginBottom: 1,
  },
  contentBlur: {
    position: 'absolute',
    top: 0,
    left: -40,
    right: -40,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0.1, 0.2)',
    zIndex: 2,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 6,
    marginBottom: 3,
    zIndex: 3,
  },
  actionIcon: {
    width: 19,
    height: 22,
    marginRight: 38,
  },
  historyText: {
    color: '#FFFFFF',
    fontSize: 12, 
  },
 
  typeIcon: {
    width: 10,
    height: 10,
  }
});

export default Zimojitextscreen;