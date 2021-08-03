import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {MetropolCardImages} from '../../Theme/Images';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

function MyAccount() {
  function MyAccountListItem({iconName, title}) {
    return (
      <TouchableOpacity style={styles.orderItem}>
        <IconMCI name={iconName} size={30} color="#333" />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <MyAccountListItem iconName={'cards'} title={'Kartlarim'} />
      <MyAccountListItem
        iconName={'chart-timeline-variant'}
        title={'Islem Gecmisi'}
      />
      <MyAccountListItem title={'Kisisel Bilgilerim'} />
      <MyAccountListItem iconName={'key-change'} title={'Sifre degistir'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
    zIndex: 10,
  },
  welcomeText: {
    fontSize: 32,
    justifyContent: 'center',
    color: '#6495ED',
  },
  orderItem: {
    flexDirection: 'row',
    height: 70,
    shadowColor: '#6495ED',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyAccount;
