import React, {useState} from 'react';
import {View} from 'react-native';
import {postUser} from '../api/user_api';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomInput';

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const res = await postUser({
      firstName,
      middleName,
      lastName,
      address,
      username,
      password,
    });

    navigation.navigate('LoginScreen');
  };
  return (
    <View>
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
      <CustomButton buttonTitle="Register" onPress={handleRegister} />
    </View>
  );
};

export default SignUpScreen;
