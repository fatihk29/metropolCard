import {StyleSheet} from 'react-native';

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
    justifyContent: 'flex-start',
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
