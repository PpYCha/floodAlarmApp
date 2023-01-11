import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Switch, Text, View} from 'react-native';
import Routes from './src/navigation/Routes';

const App = () => {
  const [result, setResult] = useState([]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const fectTeacher = async () => {
    try {
      const res = await axios.get('http://192.168.1.4:8000/api/view-user');
      console.log('response:', res.data.users);
      setResult(res.data);
    } catch (e) {
      console.log('error:', e);
    }
  };

  const handleView = () => {
    fectTeacher();
  };

  return (
    <View>
      {/* {result.map((item, i) => {
        <Text>
          <Text>result:{item}</Text>
        </Text>;
      })} */}

      {/* <Button
        onPress={handleView}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <Routes />
    </View>
  );
};

export default App;
