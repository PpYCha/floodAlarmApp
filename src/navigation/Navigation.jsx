import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WaterScreen from '../screens/WaterScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogoutScreen from '../screens/LogoutScreen';
import {useValue} from '../context/ContextProvider';
import actionHelper from '../context/actionHelper';
import MessageScreen from '../screens/message/MessageScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {dispatch} = useValue();

  const actions = actionHelper();

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Message') {
              iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
            } else if (route.name === 'Logout') {
              iconName = focused ? 'log-out' : 'log-out-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen
          name="Logout"
          component={LogoutScreen}
          // options={{
          //   tabBarLabel: 'Logout',
          //   tabBarIcon: ({color}) => (
          //     <FontAwesome5 name="sign-out-alt" color={color} size={20} />
          //   ),
          // }}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();

              dispatch({
                type: actions.RESET_CURRENT_USER,
              });
            },
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
