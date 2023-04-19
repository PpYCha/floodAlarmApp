import React, {useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';
import {postUser} from '../api/user_api';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomInput';
import actionHelper from '../context/actionHelper';
import {useValue} from '../context/ContextProvider';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    state: {loading},
    dispatch,
  } = useValue();

  const actions = actionHelper();

  const handleRegister = async () => {
    try {
      if (
        firstName === '' ||
        lastName === '' ||
        username === '' ||
        password === ''
      ) {
        Alert.alert('Please filled up', '', [{text: 'OK', onPress: () => {}}]);
        return;
      }
      dispatch({type: actions.UPDATE_LOADING});

      const res = await postUser({
        firstName,
        middleName,
        lastName,
        address,
        username,
        password,
      });

      dispatch({type: actions.RESET_LOADING});

      console.log(res);
      if (res === 'Network Error') {
        Alert.alert('Network Error', 'Check Server', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else {
        Alert.alert('Registered', 'Successfully', [
          {text: 'OK', onPress: () => navigation.navigate('LoginScreen')},
        ]);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Firstname"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />

      <TextInput
        mode="outlined"
        label="Middlename"
        value={middleName}
        onChangeText={text => setMiddleName(text)}
      />
      <TextInput
        mode="outlined"
        label="Lastname"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        mode="outlined"
        label="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        mode="outlined"
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}
          icon={() => <Icon name="save-outline" size={20} />}>
          REGISTER
        </Button>
      )}
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    width: '100%',
  },
  button: {
    marginTop: 10,
  },
});
