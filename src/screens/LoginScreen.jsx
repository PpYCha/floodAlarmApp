import {Image, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../assets/logo.png';
import {postUserSignin} from '../api/user_api';
import {useValue} from '../context/ContextProvider';
import actionHelper from '../context/actionHelper';
import {Actions} from 'react-native-gifted-chat';
import {
  Button,
  TextInput,
  Modal,
  Portal,
  Text,
  Provider,
} from 'react-native-paper';
import CustomModal from '../components/CustomModal';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  const {
    state: {currentUser},
    dispatch,
  } = useValue();

  const actions = actionHelper();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handlePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        Alert.alert('Username and password are required.', '', [
          {text: 'OK', onPress: () => {}},
        ]);
        return;
      }
      const res = await postUserSignin(username, password);
      if (res.data.status === 200) {
        dispatch({
          type: actions.UPDATE_CURRENT_USER,
          payload: res.data.data,
        });
        // console.log('result login:', currentUser);
        Alert.alert(res.data.message, '', [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      } else {
        Alert.alert(res.data.message, 'fail ine', [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    } catch (error) {
      if (error.message === 'Network request failed') {
        Alert.alert('No connection', 'Please check your internet connection.', [
          {text: 'OK', onPress: () => {}},
        ]);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>FLOOD ALARM</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <Button
          style={styles.button}
          icon={() => <Icon name="log-in-outline" size={20} />}
          mode="contained"
          onPress={() => {
            handleLogin();
          }}>
          LOGIN
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          icon={() => <Icon name="create-outline" size={20} />}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}>
          SIGN UP
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          icon={() => <Icon name="settings-outline" size={20} />}
          onPress={() => {
            showModal();
          }}>
          SETTINGS
        </Button>
      </View>
      <CustomModal
        visible={visible}
        showModal={showModal}
        hideModal={hideModal}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
    flex: 1,
  },
  button: {
    marginTop: 10,
    width: '70%',
  },
  textInput: {
    width: '100%',
  },
});
