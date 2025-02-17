import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleWidth = SCREEN_WIDTH / 414;  
const scaleHeight = SCREEN_HEIGHT / 893; 

const scaleSize = (size) => size * scaleWidth;
const scaleVertical = (size) => size * scaleHeight;

const Zimojiscannerpage = () => {
  const navigation = useNavigation();

  const increasedWidth = scaleSize(150);
  const increasedHeight = scaleSize(300);

  const centerLeft = (SCREEN_WIDTH - increasedWidth) / 2;
  const centerTop = (SCREEN_HEIGHT - increasedHeight - scaleVertical(60)) / 2;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <TouchableOpacity 
          style={[styles.iconBase, { left: scaleSize(30), top: scaleVertical(30), width: scaleSize(22), height: scaleSize(22) }]}
          onPress={() => navigation.navigate('Zimojimenu')}
        >
          <Image source={require('../assets/MenuZimoji.png')} style={styles.fullSize} resizeMode="contain" />
        </TouchableOpacity>

        <View style={[styles.logoContainer, { left: scaleSize(163), top: scaleVertical(30), width: scaleSize(88.17), height: scaleSize(22) }]}>
          <Image source={require('../assets/logo.png')} style={styles.fullSize} resizeMode="contain" />
        </View>

        <TouchableOpacity 
          style={[styles.iconBase, { left: scaleSize(373.11), top: scaleVertical(30), width: scaleSize(9.78), height: scaleSize(22) }]}
        >
          <Image source={require('../assets/Flashoff.png')} style={styles.fullSize} resizeMode="contain" />
        </TouchableOpacity>

        <View style={[styles.barContainer, { left: centerLeft, top: centerTop, width: increasedWidth, height: increasedHeight }]}>
          <Image source={require('../assets/ZimojiWhatsapp.png')} style={{ width: increasedWidth, height: increasedHeight }} resizeMode="contain" />
        </View>

        <TouchableOpacity 
          style={[styles.iconBase, { right: scaleSize(30), bottom: scaleSize(30), width: scaleSize(22), height: scaleSize(22) }]}
        >
          <Image source={require('../assets/FlipCamera.png')} style={styles.fullSize} resizeMode="contain" />
        </TouchableOpacity>

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
    justifyContent: 'flex-start', 
  },
  iconBase: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSize: {
    width: '130%',
    height: '100%',
  },
});

export default Zimojiscannerpage;
