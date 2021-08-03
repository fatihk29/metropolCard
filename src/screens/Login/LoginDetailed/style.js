import {StyleSheet} from 'react-native';
import Colors from '../../../Theme/Colors/index';
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
  loginModal: {
    flexDirection: 'column',
    height: 400,
    shadowColor: '#6495ED',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 12,
    padding: 10,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 32,
    paddingVertical: 10,
  },
  auxiliaryTitle: {
    fontSize: 21,
    paddingBottom: 20,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  cardInput: {
    width: '70%',
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    // backgroundColor: 'red',
  },
  passwordInput: {
    width: '70%',
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    // backgroundColor: 'red',
  },
  rememberMeTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 10,
  },
  rememberMeClick: {
    paddingRight: 10,
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: Colors.MainColor,
    backgroundColor: Colors.MainColor,
  },
  rememberMeTitle: {
    paddingLeft: 10,
  },
  addBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  addBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#fff',
    zIndex: 1,
    borderColor: '#6495ED',
    borderWidth: 0.2,
  },
  loginText: {
    marginRight: 10,

    color: Colors.MainColor,
    fontWeight: 'bold',
  },
});

export default styles;
