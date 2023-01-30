import axios from 'axios';
import {defaultUrl} from './defaultUrl';

export const getWaterMeauser = async () => {
  try {
    const res = await axios.get(`${defaultUrl}view-water`);
    console.log(res.data.data.measure);

    return res.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
