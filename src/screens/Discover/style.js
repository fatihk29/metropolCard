import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  mapContainer: {
    flex: 1,
  },
  sendMyLocationIconContainer: {
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  markerButton: {
    backgroundColor: 'red',
    padding: 3,
    borderRadius: 5,
  },
  markerText: {
    color: 'white',
  },
  markerContainer: {
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'center',
  },
  header: {
    width: '100%',
    bottom: 5,
  },
  sendMyLocationTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sendMyLocationContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  closeText: {
    color: 'blue',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
  },
  mylocationContainer: {
    width: 50,
    height: 50,

    backgroundColor: 'green',
  },
  mapView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
