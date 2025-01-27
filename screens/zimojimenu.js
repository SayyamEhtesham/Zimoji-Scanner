import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Original XD design dimensions
const XD_WIDTH = 414;
const XD_HEIGHT = 893;

// Scale functions to convert XD dimensions to current screen size
const scaleWidth = (size) => size * (SCREEN_WIDTH / XD_WIDTH);
const scaleHeight = (size) => size * (SCREEN_HEIGHT / XD_HEIGHT);

// Common dimensions for icons
const ICON_SIZE = scaleWidth(26);
const TOP_SPACING = scaleHeight(40);
const SIDE_SPACING = scaleWidth(20);
const MENU_ITEM_GAP = scaleHeight(30); 

const menuItems = [
    { 
        label: 'SCAN', 
        image: require('../assets/scanIcon.png'),
        id: 'scan'
    },
    { 
        label: 'SCAN IMAGE', 
        image: require('../assets/scanImage.png'),
        id: 'scanImage'
    },
    { 
        label: 'HISTORY', 
        image: require('../assets/History.png'),
        id: 'history'
    },
    { 
        label: 'FAVOURITES', 
        image: require('../assets/Favourite.png'),
        id: 'favourites'
    },
    { 
        label: 'CONTACT', 
        image: require('../assets/Contact.png'),
        id: 'contact'
    },
    { 
        label: 'CHOOSE APP ICON', 
        image: require('../assets/Appicon.png'),
        id: 'appIcon'
    },
    { 
        label: 'SETTINGS', 
        image: require('../assets/Settings.png'),
        id: 'settings'
    }
];

const Zimojimenu = () => {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleMenuItemPress = (id) => {
        setSelectedItem(id);
        if (id === 'scan') {
            navigation.navigate('Zimojitryagain'); // Navigate to the Zimojitryagain screen
        } else if (id === 'history') {
            navigation.navigate('Zimohistory'); // Navigate to the Zimohistory screen
        } else if (id === 'contact') {
            navigation.navigate('Zimojicontact'); // Navigate to the Zimojicontact screen
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.outerOverlay} />

            {/* Drawer Container */}
            <View style={styles.drawerContainer}>
                {/* Logo Container aligned with Flash Icon */}
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Image 
                            source={require('../assets/logo.png')} 
                            style={[styles.logo, {
                                width: scaleWidth(88.17),
                                height: scaleHeight(22)
                            }]} 
                            resizeMode="contain" 
                        />
                    </View>
                </View>

                {/* Menu Items */}
                <View style={styles.menuContainer}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity 
                            key={index}
                            onPress={() => handleMenuItemPress(item.id)}
                            style={[ 
                                styles.menuItemWrapper,
                                { 
                                    marginTop: index === 0 ? scaleHeight(20) : MENU_ITEM_GAP, 
                                    opacity: selectedItem === item.id ? 1 : 0.7,
                                }
                            ]}>
                            {selectedItem === item.id && (
                                <View style={styles.activeLine} />
                            )}
                            
                            <View style={styles.menuIconContainer}>
                                <Image 
                                    source={item.image} 
                                    style={[ 
                                        styles.menuIcon, 
                                        selectedItem === item.id && { opacity: 1 }
                                    ]} 
                                    resizeMode="contain" 
                                />
                            </View>

                            <Text style={[ 
                                styles.menuText, 
                                selectedItem === item.id && { opacity: 1 }
                            ]}>
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Footer Section */}
                <View style={styles.footerContainer}>
                    <Text style={styles.appText}>
                        THIS APPLICATION IS DESIGNED TO BE USED
                        EXCLUSIVELY WITH ZIMOJI'S
                    </Text>

                    <Text style={styles.copyrightText}>
                        COPYRIGHT © 202 4 ZIMOJI | ZIMO GROUP LIMITED.{'\n'}
                        ALL RIGHTS RESERVED.
                    </Text>

                    <View style={styles.bottomRow}>
                        <Text style={styles.termsText}>
                            TERMS | PRIVACY
                        </Text>
                        <Image 
                            source={require('../assets/zimoLicense.png')}
                            style={[styles.zimoLogo, { width: SCREEN_WIDTH * 0.25, height: SCREEN_HEIGHT * 0.04 }]}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>

            {/* Top Right Icon */}
            <View style={styles.flashIconContainer}>
                <TouchableOpacity style={styles.flashIcon}>
                    <Image
                        source={require('../assets/Flashoff.png')}
                        style={styles.iconStyle}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            {/* Bottom Right Icon */}
            <View style={styles.flipCameraIconContainer}>
                <TouchableOpacity style={styles.flipCameraIcon}>
                    <Image
                        source={require('../assets/FlipCamera.png')}
                        style={styles.iconStyle}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000000',
    },
    outerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
    drawerContainer: {
        width: scaleWidth(270),
        height: '100%',
        backgroundColor: '#121212',
        borderRightWidth: 1,
        borderColor: '#333',
    },
    headerContainer: {
        height: scaleHeight(80),
        justifyContent: 'center',
        paddingHorizontal: scaleWidth(30),
    },
    logoContainer: {
        position: 'absolute',
        top: scaleHeight(30),
        left: scaleWidth(70),
        width: ICON_SIZE,
        height: ICON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    menuContainer: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: scaleHeight(200),
    },
    menuItemWrapper: {
        width: '100%',
        height: scaleHeight(45),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: scaleWidth(16),
    },
    activeLine: {
        width: 2, 
        height: '80%',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        left: 0,
    },
    menuIconContainer: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        marginLeft: scaleWidth(24),
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuIcon: {
        width: '100%',
        height: '100%',
        tintColor: '#FFFFFF',
    },
    menuText: {
        marginLeft: scaleWidth(20),
        color: '#FFFFFF',
        fontSize: scaleWidth(12),
        letterSpacing: 1.2,
        fontWeight: '500',
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: scaleWidth(30),
        paddingBottom: scaleHeight(29),
        backgroundColor: '#121212',
        zIndex: 2,
    },
    appText: {
        color: 'white',
        fontSize: scaleWidth(7),
        letterSpacing: 0.8,
        lineHeight: scaleHeight(14),
        marginBottom: scaleHeight(16),
    },
    copyrightText: {
        color: 'white',
        fontSize: scaleWidth(7),
        letterSpacing: 0.8,
        lineHeight: scaleHeight(14),
        marginBottom: scaleHeight(16),
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    termsText: {
        color: 'white',
        fontSize: scaleWidth(7),
        letterSpacing: 0.8,
    },
    zimoLogo: {
        width: ICON_SIZE * 2.5,
        height: ICON_SIZE,
        position: 'relative',
        zIndex: 3,
        left:15,
    },
    flashIconContainer: {
        position: 'absolute',
        left: scaleWidth(373.11),
        top: scaleHeight(30),
        zIndex: 1,
    },
    flipCameraIconContainer: {
        position: 'absolute',
        right: scaleWidth(30),
        bottom: scaleHeight(30),
        zIndex: 1,
    },
    flashIcon:{
        width: scaleWidth(9.78),
        height: scaleHeight(22),
        justifyContent: 'center',
        alignItems: 'center',
    },
    flipCameraIcon: {
        width: scaleWidth(22),
        height: scaleHeight(22),
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: '100%',
        height: '100%',
    },
});

export default Zimojimenu;