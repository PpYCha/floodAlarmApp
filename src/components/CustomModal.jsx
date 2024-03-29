import React, {useEffect, useState} from 'react';
import {TextInput, View, Button} from 'react-native';
import {Modal, Portal, Text, Provider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEFAULT_URL_KEY} from '../api/defaultUrl';

const CustomModal = ({visible, showModal, hideModal}) => {
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [defaultUrl, setDefaultUrl] = useState('');

  useEffect(() => {
    const loadDefaultUrl = async () => {
      try {
        const savedDefaultUrl = await AsyncStorage.getItem(DEFAULT_URL_KEY);
        setDefaultUrl(savedDefaultUrl || '');
      } catch (e) {
        console.log('Error loading defaultUrl from AsyncStorage', e);
      }
    };
    loadDefaultUrl();
  }, []);

  const saveDefaultUrl = async () => {
    try {
      await AsyncStorage.setItem(
        DEFAULT_URL_KEY,
        `http://${defaultUrl}:8000/api/`,
      );
      hideModal();
      console.log('Default URL saved successfully');
    } catch (e) {
      console.log('Error saving defaultUrl to AsyncStorage', e);
    }
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                color: 'black',
              }}
              placeholder="Enter default URL"
              value={defaultUrl}
              onChangeText={setDefaultUrl}
            />
            <Button title="Save" onPress={saveDefaultUrl} />
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default CustomModal;
