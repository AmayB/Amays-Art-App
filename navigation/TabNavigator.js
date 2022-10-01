import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawings from "../screens/Drawings";
import CreateArt from "../screens/PostArt";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          if (route.name === 'Drawings') {
            iconName = focused ? 'image' : 'image-outline';
          } else if (route.name === 'Post Art') {
            iconName = focused ? 'brush' : 'brush-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Drawings" component={Drawings} />
      <Tab.Screen name="Post Art" component={CreateArt} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;