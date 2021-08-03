import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {MetropolCardImages} from '../../Theme/Images';
import styles from './style';

function Login({navigation}) {
  function LoginListItem({title}) {
    return (
      <TouchableOpacity style={styles.orderItem} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }

  function onPress() {
    navigation.navigate('LoginDetailed');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          blurRadius={2}
          source={MetropolCardImages.WelcomePage}
          style={{width: 600, height: 300, resizeMode: 'stretch'}}
        />
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
      </View>
      <LoginListItem title={'Kart Numarasi Ile Giris'} />
      <LoginListItem title={'Telefon Numarasi Ile Giris'} />
      <LoginListItem title={'Bireysel Hesap Ac'} />
    </ScrollView>
  );
}

export default Login;
