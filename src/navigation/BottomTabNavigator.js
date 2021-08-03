import React from 'react';
import {View} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Discover from '../../src/screens/Discover';
import MainPage from '../../src/screens/MainPage';
import Other from '../../src/screens/Other';
import QRPage from '../../src/screens/QRPage';
import MyAccount from '../../src/screens/MyAccount';
import Colors from '../Theme/Colors/index';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator(props) {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: Colors.MainColor}}
      activeColor="#f1e2f6"
      inactiveColor="#888"
      shifting={false}
      labeled={true}>
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <IconFA name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'MyAccount',
          tabBarIcon: ({color}) => (
            <IconMCI name="account" color={color} size={26} />
          ),
          tabBarBadge: '1',
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRPage}
        options={{
          tabBarLabel: 'QR',
          tabBarIcon: ({color}) => (
            <View style={{borderRadius: 5}}>
              <IconMCI name="qrcode" color={color} size={20} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => (
            <IconMCI name="eye" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          tabBarLabel: 'Other',
          tabBarIcon: ({color}) => (
            <IconMCI name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
