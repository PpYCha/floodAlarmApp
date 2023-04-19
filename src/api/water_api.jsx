import axios from 'axios';
import {defaultUrl} from './defaultUrl';

export const getWaterMeauser = async () => {
  try {
    const res = await axios.get(`${defaultUrl}view-water`);
    console.log('water_api log 7:', res.data.data.measure);

    return res.data.data;
  } catch (error) {
    console.log('water_api log 11:', error);
    return error;
  }
};
