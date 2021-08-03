import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../../src/screens/Login';
import CampaignDetail from '../../src/screens/CampaignDetail';
import FavoriteCampaign from '../../src/screens/FavoriteCampaign';
import {MetropolCardImages} from '../Theme/Images';
import LoginDetailed from '../../src/screens/Login/LoginDetailed';

const Stack = createStackNavigator();

function StackNavigator() {
  function HeaderLeftTitle({navigation}) {
    return (
      <View style={style.leftHeaderContainer}>
        <TouchableOpacity
          onPress={() => navigation.push('MainPage')}
          style={style.leftHeader}>
          <View style={style.subContainer}>
            <IconFA5 name="angle-left" size={30} color="#6495ED" />
            {/* <Text style={style.leftHeaderText}>Metropol Card</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function HeaderMidTitle({title}) {
    return (
      <View style={style.midHeader}>
        <Image
          style={{width: 40, height: 40, alignSelf: 'center', marginRight: 10}}
          source={MetropolCardImages.MainLogos}
        />
        <Text style={style.midHeaderText}>{title}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={BottomTabNavigator}
          options={({navigation}) => ({
            headerLeft: () => <View />,
            headerTitle: () => <HeaderMidTitle title={'MetropolCard'} />,
            headerRight: () => <View />,
          })}
        />
        <Stack.Screen
          name="CampaignDetail"
          component={CampaignDetail}
          options={({navigation}) => ({
            headerLeft: () => <HeaderLeftTitle navigation={navigation} />,
            headerTitle: () => <HeaderMidTitle title={'CampaignDetail'} />,
            headerRight: () => <View />,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation}) => ({
            headerLeft: () => <HeaderLeftTitle navigation={navigation} />,
            headerTitle: () => <HeaderMidTitle title={'Login'} />,
            headerRight: () => <View />,
          })}
        />
        <Stack.Screen
          name="FavoriteCampaign"
          component={FavoriteCampaign}
          options={({navigation}) => ({
            headerLeft: () => <HeaderLeftTitle navigation={navigation} />,
            headerTitle: () => <HeaderMidTitle title={'FavoriteCampaign'} />,
            headerRight: () => <View />,
          })}
        />
        <Stack.Screen
          name="LoginDetailed"
          component={LoginDetailed}
          options={({navigation}) => ({
            headerLeft: () => <HeaderLeftTitle navigation={navigation} />,
            headerTitle: () => <HeaderMidTitle title={'Login'} />,
            headerRight: () => <View />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  midHeader: {
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midHeaderText: {
    fontSize: 18,
  },
  leftHeader: {
    marginLeft: 5,
  },
  leftHeaderText: {
    marginLeft: 3,
    color: '#6495ED',
  },
  subContainer: {
    flexDirection: 'row',
  },
});

export default StackNavigator;
