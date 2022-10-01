import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from "../screens/Profile";
import Info from "../screens/Info";
import DrawingPad from "../screens/DrawingPad";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = "Home" component = {TabNavigator} />
      <Drawer.Screen name = "Profile" component={Profile} />
      <Drawer.Screen name = "Info" component={Info} />
      <Drawer.Screen name = "Drawing Pad" component={DrawingPad} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;