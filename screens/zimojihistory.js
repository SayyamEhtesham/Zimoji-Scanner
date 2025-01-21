import React from 'react';
import { 
  View, 
  Image, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  useWindowDimensions 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Zimojihistory = () => {
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
    fontSize: Math.max(scaleSize(9), 8),
    fontFamily: 'Lato-Regular',
    letterSpacing: scaleSize(1.5),
    color: '#FFFFFF',
  });

  // Calculate dynamic paddingTop based on screen height
  const dynamicPaddingTop = scaleVertical(140);

  const renderUrlItem = (url, title, dateTime) => (
    <TouchableOpacity
      style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}
      onPress={() => navigation.navigate('Zimojihistoryurl')} // Navigate to the Zimojihistoryurl screen
    >
      <View style={[styles.verticalLine, { left: scaleSize(-18) }]} />
      <View style={styles.typeContainer}>
        <Image 
          source={require('../assets/URL.png')} 
          style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]} 
          resizeMode="contain"
        />
        <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: scaleSize(8) }]}>URL</Text>
      </View>
      <Text style={[styles.urlLink, getCommonTextStyle()]} numberOfLines={1}>{url}</Text>
      <Text style={[styles.urlTitle, getCommonTextStyle()]} numberOfLines={2}>{title}</Text>
      <Text style={[styles.dateTime, getCommonTextStyle()]}>{dateTime}</Text>
      <TouchableOpacity 
        style={[styles.moreButton, { padding: scaleSize(5) }]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Image 
          source={require('../assets/Option.png')} 
          style={[styles.optionIcon, { width: scaleSize(20), height: scaleSize(20) }]} 
          resizeMode="contain"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  

  const renderTextItem = () => (
    <View style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}>
      <View style={[styles.verticalLine, { left: scaleSize(-18) }]} />
      <View style={styles.typeContainer}>
        <Image 
          source={require('../assets/Text.png')} 
          style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]} 
          resizeMode="contain"
        />
        <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: scaleSize(8) }]}>TEXT</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Zimojitextscreen')} // Navigate to Zimojitextscreen
      >
        <Text 
          style={[styles.textContent, getCommonTextStyle()]}
          numberOfLines={4}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo fringilla libero, eget congue justo. Aliquam dignissim, libero sit amet ultrices eleifend, libero neque gravida eros, in facilisis orci velit at nisl.
        </Text>
      </TouchableOpacity>
      <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 11:36</Text>
      <TouchableOpacity 
        style={[styles.moreButton, { padding: scaleSize(5) }]}>
        <Image 
          source={require('../assets/Option.png')} 
          style={[styles.optionIcon, { width: scaleSize(20), height: scaleSize(20) }]} 
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
  
  const renderContactItem = () => (
    <View style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}>
      <View style={[styles.verticalLine, { left: scaleSize(-19) }]} />
      <View style={styles.typeContainer}>
        <Image 
          source={require('../assets/ContactUSER.png')} 
          style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]} 
          resizeMode="contain"
        />
        <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: scaleSize(8) }]}>CONTACT</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Zimojicontactscreen')} // Navigate to Zimojicontactscreen
      >
        <Text style={[styles.contactName, getCommonTextStyle()]}>Michael Jackson</Text>
        <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO AMBASSADOR</Text>
        <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO GROUPS</Text>
        <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 09:15</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.moreButton, { padding: scaleSize(5) }]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Image 
          source={require('../assets/Option.png')} 
          style={[styles.optionIcon, { width: scaleSize(20), height: scaleSize(20) }]} 
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.header, { height: dynamicPaddingTop }]}>
          <TouchableOpacity 
            style={[styles.menuButton, { 
              left: scaleSize(30), 
              top: scaleVertical(30),
              width: scaleSize(22), 
              height: scaleSize(22) 
            }]}

            onPress={() => navigation.navigate('Zimojimenu')}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Image 
              source={require('../assets/MenuZimoji.png')} 
              style={styles.fullSize} 
              resizeMode="contain" 
            />
          </TouchableOpacity>

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
            left: scaleSize(30), 
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
            <Text style={[styles.historyText, getCommonTextStyle(), { marginLeft: scaleSize(8) }]}>HISTORY</Text>
          </View>

          <Text style={[styles.todayText, getCommonTextStyle(), { 
            left: scaleSize(22), 
            top: scaleVertical(140) 
          }]}>
            TODAY
          </Text>
        </View>

        <ScrollView 
          style={[styles.scrollContainer, { paddingTop: dynamicPaddingTop }]}
          showsVerticalScrollIndicator={false}
        >
          {renderUrlItem(
            'https://ztfr.org',
            'ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE',
            '16/09/2024 | 09:10'
          )}
          <Text style={[styles.dateHeader, getCommonTextStyle()]}>
            15 SEPTEMBER 2024
          </Text>
          {renderUrlItem(
            'https://ztfr.org',
            'ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE',
            '15/09/2024 | 17:23'
          )}
          {renderUrlItem(
            'https://zimomeet.com',
            'ZIMOMEET® | ZM® | Premium Video Meetings | Instant\nMeetings | Share Videos | No Registration | Free-to-use\nand Unlimited',
            '15/09/2024 | 11:57'
          )}
          <Text style={[styles.dateHeader, getCommonTextStyle()]}>
            13 SEPTEMBER 2024
          </Text>
          {renderUrlItem(
            'https://ztfr.org',
            'ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE',
            '13/09/2024 | 16:15'
          )}
          {renderTextItem()}
          {renderContactItem()}
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
    paddingTop: 140,
    marginTop:22,
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
  historyText: {
    marginLeft: 20,
  },
  todayText: {
    position: 'absolute',
    marginHorizontal: 8,
    color: '#888', // Changed to grey color
  },
  urlContainer: {
    marginHorizontal: 25,
    paddingBottom: 3,
    position: 'relative',
  },
  verticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 4,
    width: 1,
    backgroundColor: '#FFFFFF',
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
    marginBottom: 2,
  },
  urlTitle: {
    lineHeight: 12,
    marginBottom: 2,
    paddingRight: 15,
  },
  dateTime: {
    marginTop: 2,
  },
  moreButton: {
    position: 'absolute',
    right: 0,
    top: 20,
  },
  dateHeader: {
    color: '#666', // Lighter color
    marginTop: 12,
    marginLeft: 25,
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
});

export default Zimojihistory;
