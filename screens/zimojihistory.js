import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ActionRow = ({ scaleSize, isVisible, onClose, style, onCsvPress, showCsvActions, onEditPress, showEditActions, onMetadataPress, showMetadataActions, onTextPress, showTextActions }) => {
  //first overlay
  const actionIcons = [
    { source: require('../assets/Delete.png'), name: 'Delete' },
    { source: require('../assets/txt.png'), name: 'text' }, 
    { source: require('../assets/SVC.png'), name: 'scv' },
    { source: require('../assets/ShareIcon.png'), name: 'Shareicon' },
    { source: require('../assets/EditText.png'), name: 'Edit' },
    { source: require('../assets/Bookmark.png'), name: 'BookMark' },
    { source: require('../assets/Metadata.png'), name: 'Metadata' },
  ];
// second overlay for csv icon
  const csvActionIcons = [
    { source: require('../assets/SVC.png'), name: 'CSV Action 1' },
    { source: require('../assets/ShareIcon.png'), name: 'CSV Action 2' },
    { source: require('../assets/DownloadIcon.png'), name: 'CSV Action 3' },
  ];

  const metadataActionIcons = [

  ];
// third overlay for txticon
  const textActionIcons = [
    { source: require('../assets/txt.png'), name: 'CSV Action 1' },
    { source: require('../assets/ShareIcon.png'), name: 'CSV Action 2' },
    { source: require('../assets/DownloadIcon.png'), name: 'CSV Action 3' },
  ];


  // condition when particular icon show
  if (!isVisible) return null;

  return (
    <View style={[styles.actionRow, style]}>
      <View style={styles.csvContainer}>
        {(showCsvActions ? csvActionIcons : (showEditActions ? [] : (showMetadataActions ? metadataActionIcons : (showTextActions ? textActionIcons : actionIcons)))).map((icon, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.actionButton, { padding: wp('2%') }]}
            onPress={() => {
              if (icon.name === 'scv') {
                onCsvPress(); // open csvicon
              } else if (icon.name === 'text') {
                onTextPress(); 
              } else if (icon.name === 'Edit') {
                onEditPress(); 
              } else if (icon.name === 'Metadata') {
                onMetadataPress(); 
              } else {
                console.log(`${icon.name} pressed`);
                onClose();
              }
            }}
          >
            <Image
              source={icon.source}
              style={[showCsvActions || showMetadataActions || showTextActions ? styles.csvActionIcon : styles.actionIcon, { width: wp('5.5%'), height: wp('5.5%') }]}
              resizeMode="contain"
            />
            {showCsvActions && index < csvActionIcons.length - 1 && (
              <View style={{ width: wp('10%') }} /> 
            )}
            {showMetadataActions && index < metadataActionIcons.length - 1 && (
              <View style={{ width: wp('10%') }} /> 
            )}
            {showTextActions && index < textActionIcons.length - 1 && (
              <View style={{ width: wp('10%') }} /> 
            )}
          </TouchableOpacity>
        ))}
      </View>
      {/*This is for metadata */}
      {showMetadataActions && (
        <TouchableOpacity style={styles.metadataDescription} onPress={onClose}>
          <Image
            source={require('../assets/Metadata.png')}
            style={styles.metadataIcon}
            resizeMode="contain"
          />
          <View style={styles.metadataTextContainer}>
            <Text style={styles.metadataText}>
              ZIMOJI USES ADVANCED (AES) 256-BIT ENCRYPTION
            </Text>
            <Text style={styles.metadataText}>
              METADATA FOR THIS ZIMOJI IS PROTECTED
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const EditActionRow = ({ scaleSize, isVisible, onClose }) => {
  const editActionIcons = [
    { source: require('../assets/EditText.png'), name: 'Edit Text' },
  ];

  if (!isVisible) return null;

  return (
    <View style={[styles.actionRow, { top: hp('5%') }]}>
      <View style={styles.csvContainer}>
        <TouchableOpacity
          style={[styles.actionButton, { padding: wp('2%'), marginRight: wp('2%'), marginTop: hp('-2%') }]} 
          onPress={() => {
            console.log(`${editActionIcons[0].name} pressed`);
            onClose(); // Closing  overlay
          }}
        >
          <Image
            source={editActionIcons[0].source}
            style={[styles.actionIcon, { width: wp('5.5%'), height: wp('5.5%'), left: 50, tintColor: 'yellow' }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.urlText, { fontWeight: 'bold', marginBottom: hp('2%'), bottom: 7, left: 54 }]}>
          URL
        </Text>
        <View style={[styles.horizontalLine, { width: '70%', left: 25 }]} />
        <View>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.SaveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const UrlItem = ({ url, title, dateTime, id, scale, isActive, onOptionPress, navigation, scaleSize, scaleVertical, getCommonTextStyle }) => {
  const [showCsvActions, setShowCsvActions] = useState(false);
  const [showEditActions, setShowEditActions] = useState(false);
  const [showMetadataActions, setShowMetadataActions] = useState(false);
  const [showTextActions, setShowTextActions] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isActive ? 0.2 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const handleCsvPress = () => {
    setShowCsvActions(true);
    setShowEditActions(false);
    setShowMetadataActions(false);
    setShowTextActions(false);
  };

  const handleEditPress = () => {
    setShowEditActions(true);
    setShowCsvActions(false);
    setShowMetadataActions(false);
    setShowTextActions(false);
  };

  const handleMetadataPress = () => {
    setShowMetadataActions(true);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowTextActions(false);
  };

  const handleTextPress = () => {
    setShowTextActions(true);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowMetadataActions(false);
  };

  const handleClose = () => {
    onOptionPress(id);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowMetadataActions(false);
    setShowTextActions(false);
  };

  return (
    <View style={styles.itemWrapper}>
      <Animated.View style={[{ opacity: fadeAnim }]}>
        <TouchableOpacity
          style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}
          onPress={() => navigation.navigate('Zimojihistoryurl')}
        >
          <View style={[styles.verticalLine, { left: scaleSize(-18) }]}>
            <Image
              source={require('../assets/MenuSection.png')}
              style={{ width: scaleSize(1), height: '100%', tintColor: isActive ? 'yellow' : 'white' }}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.typeContainer}>
            <Image
              source={require('../assets/URL.png')}
              style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]}
              resizeMode="contain"
            />
            <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: scaleSize(8), }]}>URL</Text>
          </View>
          <Text style={[styles.urlLink, getCommonTextStyle()]} numberOfLines={1}>{url}</Text>
          <Text style={[styles.urlTitle, getCommonTextStyle()]} numberOfLines={2}>{title}</Text>
          <Text style={[styles.dateTime, getCommonTextStyle()]}>{dateTime}</Text>
          <TouchableOpacity
            style={[styles.moreButton, { padding: scaleSize(5) }]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={() => onOptionPress(id)}
          >
            <Image
              source={require('../assets/Option.png')}
              style={[styles.optionIcon, { width: scaleSize(20), height: scaleSize(20) }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>
      <ActionRow
        scaleSize={scaleSize}
        isVisible={isActive}
        onClose={handleClose}
        onCsvPress={handleCsvPress}
        showCsvActions={showCsvActions}
        onEditPress={handleEditPress}
        showEditActions={showEditActions}
        onMetadataPress={handleMetadataPress}
        showMetadataActions={showMetadataActions}
        onTextPress={handleTextPress}
        showTextActions={showTextActions}
        style={[styles.actionRowStyle, { top: scaleSize(50) }]}
      />
      <EditActionRow
        scaleSize={scaleSize}
        isVisible={showEditActions}
        onClose={handleClose}
      />
    </View>
  );
};

const TextItem = ({ id, scale, isActive, onOptionPress, navigation, scaleSize, scaleVertical, getCommonTextStyle }) => {
  const [showCsvActions, setShowCsvActions] = useState(false);
  const [showEditActions, setShowEditActions] = useState(false);
  const [showMetadataActions, setShowMetadataActions] = useState(false);
  const [showTextActions, setShowTextActions] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isActive ? 0.2 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const handleCsvPress = () => {
    setShowCsvActions(true);
    setShowEditActions(false);
    setShowMetadataActions(false);
    setShowTextActions(false);
  };

  const handleEditPress = () => {
    setShowEditActions(true);
    setShowCsvActions(false);
    setShowMetadataActions(false);
    setShowTextActions(false);
  };

  const handleMetadataPress = () => {
    setShowMetadataActions(true);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowTextActions(false);
  };

  const handleTextPress = () => {
    setShowTextActions(true);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowMetadataActions(false);
  };

  const handleClose = () => {
    onOptionPress(id);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowMetadataActions(false);
    setShowTextActions(false);
  };

  return (
    <View style={styles.itemWrapper}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}>
          <View style={[styles.verticalLine, { left: scaleSize(-18) }]}>
            <Image
              source={require('../assets/MenuSection.png')}
              style={{ width: scaleSize(1), height: '100%', tintColor: isActive ? 'yellow' : 'white' }}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.typeContainer}>
            <Image
              source={require('../assets/Text.png')}
              style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]}
              resizeMode="contain"
            />
            <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: scaleSize(8) }]}>TEXT</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Zimojitextscreen')}
          >
            <Text
              style={[styles.textContent, getCommonTextStyle()]}
              numberOfLines={5}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo fringilla libero, eget congue justo. Aliquam dignissim, libero sit amet ultrices pharetra, libero neque rhoncus nisl, sed tempor diam nisl et ligula. Praesent gravida, magna eget hendrerit dignissim, dui ante.
            </Text>
          </TouchableOpacity>
          <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 11:36</Text>
          <TouchableOpacity
            style={[styles.moreButton, { padding: scaleSize(5) }]}
            onPress={() => onOptionPress(id)}
          >
            <Image
              source={require('../assets/Option.png')}
              style={[styles.optionIcon, { width: scaleSize(20), height: scaleSize(20) }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <ActionRow
        scaleSize={scaleSize}
        isVisible={isActive}
        onClose={handleClose}
        onCsvPress={handleCsvPress}
        showCsvActions={showCsvActions}
        onEditPress={handleEditPress}
        showEditActions={showEditActions}
        onMetadataPress={handleMetadataPress}
        showMetadataActions={showMetadataActions}
        onTextPress={handleTextPress}
        showTextActions={showTextActions}
        style={[styles.actionRowStyle, { top: scaleSize(50) }]}
      />
      <EditActionRow
        scaleSize={scaleSize}
        isVisible={showEditActions}
        onClose={handleClose}
      />
    </View>
  );
};

const ContactItem = ({ id, scale, isActive, onOptionPress, navigation, scaleSize, scaleVertical, getCommonTextStyle }) => {
  const [showCsvActions, setShowCsvActions] = useState(false);
  const [showEditActions, setShowEditActions] = useState(false);
  const [showMetadataActions, setShowMetadataActions] = useState(false);
  const [showTextActions, setShowTextActions] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isActive ? 0.2 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const handleCsvPress = () => {
    setShowCsvActions(true);
    setShowEditActions(false);
  };

  const handleEditPress = () => {
    setShowEditActions(true);
    setShowCsvActions(false);
  };

  const handleMetadataPress = () => {
    setShowMetadataActions(true);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowTextActions(false);
  };

  const handleTextPress = () => {
    setShowTextActions(true);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowMetadataActions(false);
  };

  const handleClose = () => {
    onOptionPress(id);
    setShowCsvActions(false);
    setShowEditActions(false);
    setShowMetadataActions(false);
    setShowTextActions(false);
  };

  return (
    <View style={styles.itemWrapper}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={[styles.urlContainer, { marginTop: scaleVertical(9) }]}>
          <View style={[styles.verticalLine, { left: scaleSize(-19) }]}>
            <Image
              source={require('../assets/MenuSection.png')}
              style={{ width: scaleSize(1), height: '100%', tintColor: isActive ? 'yellow' : 'white' }}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.typeContainer}>
            <Image
              source={require('../assets/ContactUSER.png')}
              style={[styles.typeIcon, { width: scaleSize(10), height: scaleSize(10) }]}
              resizeMode="contain"
            />
            <Text style={[styles.urlTypeText, getCommonTextStyle(), { marginLeft: scaleSize(8) }]}>CONTACT</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Zimojicontactscreen')}
          >
            <Text style={[styles.contactName, getCommonTextStyle()]}>Michael Jackson</Text>
            <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO AMBASSADOR</Text>
            <Text style={[styles.contactTitle, getCommonTextStyle()]}>ZIMO GROUPS</Text>
            <Text style={[styles.dateTime, getCommonTextStyle()]}>13/09/2024 | 09:15</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.moreButton, { padding: scaleSize(5) }]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={() => onOptionPress(id)}
          >
            <Image
              source={require('../assets/Option.png')}
              style={[styles.optionIcon, { width: scaleSize(20), height: scaleSize(20) }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <ActionRow
        scaleSize={scaleSize}
        isVisible={isActive}
        onClose={handleClose}
        onCsvPress={handleCsvPress}
        showCsvActions={showCsvActions}
        onEditPress={handleEditPress}
        showEditActions={showEditActions}
        onMetadataPress={handleMetadataPress}
        showMetadataActions={showMetadataActions}
        onTextPress={handleTextPress}
        showTextActions={showTextActions}
        style={[styles.actionRowStyle, { top: scaleSize(50) }]}
      />
      <EditActionRow
        scaleSize={scaleSize}
        isVisible={showEditActions}
        onClose={handleClose}
      />
    </View>
  );
};

const Zimojihistory = () => {
  const navigation = useNavigation();
  const [activeOptionId, setActiveOptionId] = useState(null);

  const getScaleFactor = () => {
    const baseWidth = 414;
    const baseHeight = 893;
    return {
      width: wp('100%') / baseWidth,
      height: hp('100%') / baseHeight,
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

  const dynamicPaddingTop = scaleVertical(140);

  const handleOptionPress = (id) => {
    setActiveOptionId(activeOptionId === id ? null : id);
  };

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
          <Text style={styles.historyText}>HISTORY</Text>
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
          <UrlItem
            url="https://ztfr.org"
            title="ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE"
            dateTime="16/09/2024 | 09:10"
            id="url1"
            scale={scale}
            isActive={activeOptionId === 'url1'}
            onOptionPress={handleOptionPress}
            navigation={navigation}
            scaleSize={scaleSize}
            scaleVertical={scaleVertical}
            getCommonTextStyle={getCommonTextStyle}
          />
          <Text style={[styles.dateHeader, getCommonTextStyle()]}>
            15 SEPTEMBER 2024
          </Text>
          <UrlItem
            url="https://ztfr.org"
            title="ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE"
            dateTime="15/09/2024 | 17:23"
            id="url2"
            scale={scale}
            isActive={activeOptionId === 'url2'}
            onOptionPress={handleOptionPress}
            navigation={navigation}
            scaleSize={scaleSize}
            scaleVertical={scaleVertical}
            getCommonTextStyle={getCommonTextStyle}
          />
          <UrlItem
            url="https://zimomeet.com"
            title="ZIMOMEET® | ZM® | Premium Video Meetings | Instant\nMeetings | Share Videos | No Registration | Free-to-use\nand Unlimited"
            dateTime="15/09/2024 | 11:57"
            id="url3"
            scale={scale}
            isActive={activeOptionId === 'url3'}
            onOptionPress={handleOptionPress}
            navigation={navigation}
            scaleSize={scaleSize}
            scaleVertical={scaleVertical}
            getCommonTextStyle={getCommonTextStyle}
          />
          <Text style={[styles.dateHeader, getCommonTextStyle()]}>
            13 SEPTEMBER 2024
          </Text>
          <UrlItem
            url="https://ztfr.org"
            title="ZITRANSFER® | ZTFR® | ZTFRX® | Send Large Files |\nShare Photos | Storage | Up to 1TB | FREE"
            dateTime="13/09/2024 | 16:15"
            id="url4"
            scale={scale}
            isActive={activeOptionId === 'url4'}
            onOptionPress={handleOptionPress}
            navigation={navigation}
            scaleSize={scaleSize}
            scaleVertical={scaleVertical}
            getCommonTextStyle={getCommonTextStyle}
          />
          <TextItem
            id="text1"
            scale={scale}
            isActive={activeOptionId === 'text1'}
            onOptionPress={handleOptionPress}
            navigation={navigation}
            scaleSize={scaleSize}
            scaleVertical={scaleVertical}
            getCommonTextStyle={getCommonTextStyle}
          />
          <ContactItem
            id="contact1"
            scale={scale}
            isActive={activeOptionId === 'contact1'}
            onOptionPress={handleOptionPress}
            navigation={navigation}
            scaleSize={scaleSize}
            scaleVertical={scaleVertical}
            getCommonTextStyle={getCommonTextStyle}
          />
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
  actionRow: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 22,
    borderRadius: 5,
    marginTop: -41,
    right: 30,
    zIndex: 1000,
  },
  csvContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    left: 30,
  },
  actionButton: {
    marginHorizontal: 5,
  },
  actionIcon: {
    tintColor: '#FFF',
  },
  csvActionIcon: {
    tintColor: '#FFF',
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 140,
    marginTop: 22,
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
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    letterSpacing: 1.5,
    color: '#FFFFFF',
  },
  todayText: {
    position: 'absolute',
    marginHorizontal: 8,
    color: '#888',
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
    marginBottom: 4,
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
    marginTop: 4,

  },
  moreButton: {
    position: 'absolute',
    right: 0,
    top: 20,
  },
  dateHeader: {
    color: '#666',
    marginTop: 15,
    marginLeft: 25,
    opacity:0.7,
    marginBottom:6,

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
  urlText: {
    color: '#FFF',
    marginBottom: 55,
  },
  placeholderText: {
    color: '#888',
    marginBottom: 5,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#FFF',
    marginTop: -9,
    right: 31,
  },
  cancelText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: -29,
    right: 120,
    top: 9,
    textAlign: 'center',
  },
  SaveText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: -29,
    right: 23,
    top: 9,
    textAlign: 'center',
  },
  metadataDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, 
    right: 290,
  },
  metadataIcon: {
    width: 22,
    height: 22,
    marginRight: 20, 
    tintColor: 'yellow',
  },
  metadataTextContainer: {
    flexDirection: 'column',
  },
  metadataText: {
    color: '#FFF',
    fontSize: 10, 
  },
});

export default Zimojihistory;