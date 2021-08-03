import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import {MetropolCardImages} from '../../Theme/Images';

function Other(props) {
  function OtherListItem({title}) {
    return (
      <TouchableOpacity style={styles.orderItem}>
        <Text style={styles.title}>{title}</Text>
        <IconFA5 name="angle-right" size={20} color="#6495ED" />
      </TouchableOpacity>
    );
  }

  function SocialMediaIcon({source, width}) {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Image style={[styles.icon, {width: width}]} source={source} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <OtherListItem icon title={'MetropolCard li olmak istiyorum'} />
        <OtherListItem title={'Hakkimizda'} />
        <OtherListItem title={'Bize Ulasin'} />
        <OtherListItem title={'Destek'} />
      </View>
      <View style={styles.socialMediaIconContainer}>
        <View style={styles.socialMediaIcons}>
          <SocialMediaIcon
            source={MetropolCardImages.FacebookLogo}
            width={40}
          />
          <SocialMediaIcon
            source={MetropolCardImages.InstagramLogo}
            width={40}
          />
          <SocialMediaIcon />
        </View>
        <View style={styles.mainLogoContainer}>
          <SocialMediaIcon
            source={MetropolCardImages.MetropolCardText}
            width={100}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: 'row',
    height: 100,
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
    justifyContent: 'center',
  },
  title: {
    flex: 3,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialMediaIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  socialMediaIcons: {
    flexDirection: 'row',
    flex: 6,
    marginLeft: 10,
    // backgroundColor: 'blue',
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginRight: 20,
  },
  mainLogoContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
  },
});

export default Other;
