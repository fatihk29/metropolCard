import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#6495ED',
    paddingBottom: 10,
    // backgroundColor: 'red',
  },
  itemLeftContainer: {
    flex: 13,
    flexDirection: 'row',
  },
  itemRightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImageContainer: {
    flex: 2,
    borderRightWidth: 0.8,
    borderRightColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 8,
    justifyContent: 'center',
    marginLeft: 5,
  },
  name: {
    marginLeft: 3,
    fontSize: 22,
  },
  auxiliaryTitle: {
    fontSize: 14,
    color: '#444',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
export default styles;
