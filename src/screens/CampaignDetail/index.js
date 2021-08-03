import React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

function MyAccount(props) {
  return (
    <ScrollView>
      <View style={styles.campaignImageContainer}>
        <IconMCI name="image-off" size={30} color="black" style={styles.icon} />
      </View>
      <View style={styles.campaingTitleContainer}>
        <Text style={styles.campaignTitle}>Kampanya Detaylari</Text>
      </View>
      <View style={styles.campaignPassageContainer}>
        <Text style={styles.campaignPassage}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
      <View style={styles.campaingButtonContainer}>
        <TouchableOpacity style={styles.campaingButton}>
          <Text style={styles.campaingButtonTitle}>Detayli Bilgi Al</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default MyAccount;
