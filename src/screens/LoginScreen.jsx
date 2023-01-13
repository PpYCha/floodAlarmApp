import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  handleSubmit = () => {
    // handle form submission logic here
  };

  return (
    <View style={styles.main}>
      <View style={styles.topView}>
        <Text style={styles.text}>Flood Alarm</Text>
        <Text style={styles.text}>APPLICATION</Text>
      </View>
      <View style={styles.bottomView}>
        <CustomInput
          placeholder="user"
          onChangeText={text => setUsername(text)}
        />
        <CustomInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <CustomButton
          buttonTitle="LOGIN"
          onPress={() => {
            if (username != '' || password != '') {
              navigation.navigate('Home');
              console.log('if login pressed');
            } else {
              Alert.alert('Please input your password or email');
              console.log('else login pressed');
            }
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    topView: {flex: 1},
    text: {fontSize: 40, fontWeight: '800', textAlign: 'center'},
    bottomView: {flex: 2},
    container: {
      flex: 1,

      backgroundColor: 'transparent',
      alignContent: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
    },
  },
  sign: {
    paddingTop: 40,
    paddingLeft: 10,
    color: '#8C55AA',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 23,
  },
  input: {
    width: '76%',
    color: 'rgb(38, 50, 56)',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1,
    backgroundColor: 'rgba(136, 126, 126, 0.04)',
    padding: 10,
    borderWidth: 0,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.02)',
    marginBottom: 50,
    marginLeft: 46,
    textAlign: 'center',
    marginBottom: 27,
    fontFamily: 'Ubuntu',
  },
  form: {
    paddingTop: 40,
  },
  submit: {
    cursor: 'pointer',
    borderRadius: 5,
    color: '#fff',
    backgroundColor: 'linear-gradient(to right, #9C27B0, #E040FB)',
    borderWidth: 0,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    paddingTop: 10,
    fontFamily: 'Ubuntu',
    width: '100%',
    fontSize: 13,
    shadowColor: '#000000',
    shadowOpacity: 0.04,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 20},
    elevation: 20,
  },
  forgot: {
    textShadowColor: 'rgba(117, 117, 117, 0.12)',
    textShadowRadius: 0,
    textShadowOffset: {width: 0, height: 3},
    color: '#E1BEE7',
    paddingTop: 15,
  },
  text: {
    textShadowColor: 'rgba(117, 117, 117, 0.12)',
    textShadowRadius: 0,
    textShadowOffset: {width: 0, height: 3},
    color: '#E1BEE7',
    textDecorationLine: 'none',
  },
});
