import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCodeScanner from 'react-native-qrcode-scanner';

function QRPage({navigation}) {
  const [QRCodeStatus, setQRCodeStatus] = useState(false);

  function onPress() {
    if (!QRCodeStatus) {
      setQRCodeStatus(true);
    } else {
      setQRCodeStatus(false);
    }
    console.log(QRCodeStatus);
  }

  return (
    <View style={styles.container}>
      {!QRCodeStatus ? (
        <TouchableOpacity style={styles.QRCodeBtnContainer} onPress={onPress}>
          <IconMCI
            name="qrcode"
            color={'red'}
            size={50}
            style={{padding: 15}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>QR Okut</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <QRCodeScanner
          topContent={<Text style={styles.centerText}>Scan the QR code.</Text>}
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable} onPress={onPress}>
              <Text style={styles.buttonText}>Iptal et</Text>
            </TouchableOpacity>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  QRCodeBtnContainer: {
    flexDirection: 'column',
    width: width / 2,
    height: height / 4,
    shadowColor: '#6495ED',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: width / 8,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: 150,
    height: 60,
    backgroundColor: '#000099',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default QRPage;
