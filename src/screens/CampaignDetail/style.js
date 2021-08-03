import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  campaignImageContainer: {
    width: width,
    height: (2 * height) / 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  icon: {},
  campaingTitleContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  campaignTitle: {
    fontSize: 24,
    padding: 10,
    color: '#222',
  },
  campaignPassageContainer: {
    padding: 10,
  },
  campaignPassage: {
    fontSize: 16,
    color: '#444',
  },
  campaingButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  campaingButton: {
    flexDirection: 'row',
    width: width / 2,
    height: 40,
    shadowColor: '#6495ED',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: width / 4,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  campaingButtonTitle: {
    color: 'green',
    fontSize: 20,
  },
});

export default styles;
