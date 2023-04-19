import {StyleSheet, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import axios from 'axios';
import {defaultUrl} from '../../api/defaultUrl';
import {useValue} from '../../context/ContextProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);

  const {
    dispatch,
    state: {currentUser},
  } = useValue();

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
                _id: message.userId,
                name: currentUser.firstName + ' ' + currentUser.lastName,
              },
            };
          })
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setMessages(messageAxios); // set messages state directly here
      })
      .catch(error => {
        console.log('Error 32:', error);
      });
  }, []);

  // const appendMessages = useCallback(messages => {
  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, messages),
  //   );
  //   console.log('append:', messages);
  // }, []);

  const handleSend = async messages => {
    try {
      const newMessage = messages[0];

      const res = await axios.post(`${defaultUrl}add-message`, {
        _id: newMessage._id,
        text: newMessage.text,
        userId: currentUser.id,
        name: currentUser.firstName + ' ' + currentUser.lastName,
      });

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );
      // console.log('result on send:', currentUser);
    } catch (error) {
      console.log('error:', error);
    }
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    const isCurrentUser =
      parseInt(props.currentMessage.user._id) === parseInt(currentUser.id);

    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: isCurrentUser ? '#2e64e5' : '#E4E6EB',
          },
          right: {
            backgroundColor: isCurrentUser ? '#2e64e5' : '#E4E6EB',
          },
        }}
        textStyle={{
          left: {
            color: isCurrentUser ? '#E4E6EB' : '#333',
          },
          right: {
            color: isCurrentUser ? '#E4E6EB' : '#333',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const renderInputToolbar = props => {
    return (
      <InputToolbar {...props} containerStyle={{backgroundColor: '#888888'}} />
    );
  };

  return (
    <GiftedChat
      renderInputToolbar={renderInputToolbar}
      messages={messages}
      onSend={handleSend}
      user={{
        user: currentUser.id,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
});
