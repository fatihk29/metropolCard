import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {MetropolCardImages} from '../../../Theme/Images';

import styles from './style';

function Login({navigation}) {
  const [rememberMeClickStatus, setRememberMeClickStatus] = useState(false);

  function onPress() {
    if (!rememberMeClickStatus) {
      setRememberMeClickStatus(true);
    } else {
      setRememberMeClickStatus(false);
    }
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
      <View style={styles.loginModal}>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>MetropolCard</Text>
          <Text style={styles.auxiliaryTitle}>Kart Numarasi Ile Giris</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.cardInput} placeholder="Kart Numarasi" />
          <TextInput style={styles.passwordInput} placeholder="sfireniz" />
        </View>
        <View style={styles.rememberMeTitleContainer}>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.rememberMeClick,
              rememberMeClickStatus ? {backgroundColor: '#fff'} : null,
            ]}>
            <View />
          </TouchableOpacity>
          <Text style={styles.rememberMeTitle}>Beni Hatirla</Text>
        </View>
        <View style={styles.addBtnContainer}>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.loginText}>GIRIS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
