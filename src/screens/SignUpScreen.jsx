import React, {useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';
import {postUser} from '../api/user_api';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomInput';
import actionHelper from '../context/actionHelper';
import {useValue} from '../context/ContextProvider';

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
      <CustomTextInput
        placeholder="Firstname"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <CustomTextInput
        placeholder="Middlename"
        value={middleName}
        onChangeText={text => setMiddleName(text)}
      />
      <CustomTextInput
        placeholder="Lastname"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <CustomTextInput
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <CustomTextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CustomButton buttonTitle="Register" onPress={handleRegister} />
      )}
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
