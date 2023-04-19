import {StyleSheet, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useValue} from '../../context/ContextProvider';
import axios from 'axios';
import {defaultUrl} from '../../api/defaultUrl';

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);
  const {state: currentUser} = useValue();

  useEffect(() => {
    axios
      .get(`${defaultUrl}view-message`)
      .then(response => {
        const messageAxios = response.data.data
          .map(message => {
            return {
              ...message,
              _id: message._id,
              text: message.text,
              createdAt: new Date(message.created_at),
              user: {
                _id: currentUser.id,
                name: currentUser.firstName + ' ' + currentUser.lastName,
              },
            };
          })
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        console.log(currentUser);
        setMessages(messageAxios); // set messages state directly here
      })
      .catch(error => {
        console.log('Error 32:', error);
      });

    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello!',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

    handleSend(messages);
  }, []);

  const handleSend = async messages => {
    try {
      const newMessage = messages[0];
      console.log(newMessage);
      const res = await axios.post(`${defaultUrl}add-message`, {
        message: newMessage.text,
        user: currentUser.id,
        _id: newMessage._id,
      });

      // console.log('result on send:', currentUser);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: currentUser.id,
      }}
    />
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
