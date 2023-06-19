import axios from 'axios';
import {defaultUrl} from './defaultUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEFAULT_URL_KEY} from './defaultUrl';

export const getWaterMeauser = async () => {
  try {
    const savedDefaultUrl = await AsyncStorage.getItem(DEFAULT_URL_KEY);

    const res = await axios.get(`${savedDefaultUrl}view-water`);
    console.log('water_api log 7:', res.data.data.measure);

    return res.data.data;
  } catch (error) {
    console.log('water_api log 11:', error);
    return error;
  }
};
