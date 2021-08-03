import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 10,
    zIndex: 1,
    borderColor: '#6495ED',
    borderWidth: 0.2,
  },
  loginText: {
    marginRight: 10,
  },
});

export default style;
