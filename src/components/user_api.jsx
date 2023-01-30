import axios from 'axios';
import {defaultUrl} from '../api/defaultUrl';

export const postUser = async ({
  firstName,
  middleName,
  lastName,
  address,
  username,
  password,
}) => {
  try {
    const res = await axios.post(`${defaultUrl}add-user`, {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address: address,
      username: username,
      password: password,
    });
    console.log('Diasan:', res);
    return res;
  } catch (error) {
    console.log('post error:', error);
    return error.message;
  }
};

export const postUserSignin = async (username, password) => {
  try {
    const res = await axios.post(`${defaultUrl}user-signin`, {
      username: username,
      password: password,
    });

    return res;
  } catch (error) {
    console.log('post signin error:', error);
    return error;
  }
};
