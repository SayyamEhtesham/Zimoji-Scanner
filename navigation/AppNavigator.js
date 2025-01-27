import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CameraPermission1 from '../screens/camerapermission1';
import CameraPermission2 from '../screens/camerapermission2';
import ZimojiScanner from '../screens/zimojiscanner';
import Zimojiscannerpage from '../screens/zimojiscannerpage';  
import Zimojimenu from '../screens/zimojimenu';
import Zimojihistory from '../screens/zimojihistory';
import Zimojihistoryurl from '../screens/zimojihistoryurl';
import Zimojitextscreen from '../screens/zimojitextscreen';
import Zimojicontactscreen from '../screens/zimojicontactscreen';
import Zimojitryagain from '../screens/zimojitryagain';
import Zimojicontact from '../screens/zimojicontact';
import Zimojiwhatsapp from '../screens/zimojiwhatsapp';
import Zimojitelegram from '../screens/zimojitelegram';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ZimojiScanner">
        <Stack.Screen
          name="CameraPermission1"
          component={CameraPermission1}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="CameraPermission2"
          component={CameraPermission2}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ZimojiScanner"
          component={ZimojiScanner}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Zimojiscannerpage"  
          component={Zimojiscannerpage}
          options={{ headerShown: false }} 
        />
           <Stack.Screen
          name="Zimojimenu"  
          component={Zimojimenu}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="Zimohistory"  
          component={Zimojihistory}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="Zimojihistoryurl"  
          component={Zimojihistoryurl}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Zimojitextscreen"  
          component={Zimojitextscreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Zimojicontactscreen"  
          component={Zimojicontactscreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Zimojitryagain"  
          component={Zimojitryagain}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Zimojicontact"  
          component={Zimojicontact}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Zimojiwhatsapp"  
          component={Zimojiwhatsapp}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Zimojitelegram"  
          component={Zimojitelegram}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
