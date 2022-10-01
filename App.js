import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerNavigator from './navigation/DrawerNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawings from "./screens/Drawings";
import CreateArt from './screens/PostArt';

export default function App() {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}