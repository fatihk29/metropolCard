import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const CampaingListItem = props => {
  const [favoriteCampaignItem, setFavoriteCampaignItem] = useState(false);

  function onPress() {
    if (!favoriteCampaignItem) {
      setFavoriteCampaignItem(true);
    } else {
      setFavoriteCampaignItem(false);
    }
  }

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemLeftContainer}
        onPress={() => {
          props.navigation.navigate('CampaignDetail', {itemId: props.itemId});
        }}>
        <View style={styles.itemImageContainer}>
          {props.avatar ? (
            <IconMCI name="image-off-outline" size={20} style={styles.icon} />
          ) : (
            <IconMCI name="image-off-outline" size={20} style={styles.icon} />
          )}
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.mainTitle}</Text>
          <Text style={styles.auxiliaryTitle}>#MetropolCard_Mobil</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemRightContainer} onPress={onPress}>
        <IconMCI
          name={favoriteCampaignItem ? 'heart-outline' : 'heart'}
          size={30}
          color="#6495ED"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CampaingListItem;
