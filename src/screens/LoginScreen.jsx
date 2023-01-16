import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../assets/logo.png';
import {postUserSignin} from '../api/user_api';
import {useValue} from '../context/ContextProvider';
import actionHelper from '../context/actionHelper';
import {Actions} from 'react-native-gifted-chat';

const LoginScreen = ({navigation}) => {
  const {dispatch} = useValue();

  const actions = actionHelper();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handlePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = async () => {
    const res = await postUserSignin(username, password);

    console.log(res.data.data);
    dispatch({
      type: actions.UPDATE_CURRENT_USER,
      payload: res.data.data,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>FLOOD ALARM</Text>
      </View>
      <View style={styles.formContainer}>
        <CustomInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <CustomButton buttonTitle="LOGIN" onPress={handleLogin} />
        <CustomButton
          buttonTitle="SIGN UP"
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
      <View></View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  Container: {
    alignItems: 'center',
    marginTop: 50,
  },
});
