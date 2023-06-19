import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEFAULT_URL_KEY} from './defaultUrl';

// import {defaultUrl} from './defaultUrl';

export const postUser = async ({
  firstName,
  middleName,
  lastName,
  address,
  username,
  password,
}) => {
  try {
    const savedDefaultUrl = await AsyncStorage.getItem(DEFAULT_URL_KEY);

    const res = await axios.post(`${savedDefaultUrl}add-user`, {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address: address,
      username: username,
      password: password,
    });
    console.log('result postUser:', res);
    return res;
  } catch (error) {
    console.log('post error:', error);
    return error.message;
  }
};

export const postUserSignin = async (username, password) => {
  try {
    const savedDefaultUrl = await AsyncStorage.getItem(DEFAULT_URL_KEY);

    const res = await axios.post(`${savedDefaultUrl}user-signin`, {
      username: username,
      password: password,
    });

    return res;
  } catch (error) {
    console.log('post signin error:', error);
    return error;
  }
};
