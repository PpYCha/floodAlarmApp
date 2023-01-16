import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({placeholder, ...props}) => {
  return (
    <View style={styles.action}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        autoCorrect={false}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',

    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    margin: 5,
    paddingLeft: 10,
    color: 'black',
    borderWidth: 1,
    backgroundColor: 'efefef',
    borderRadius: 10,
  },
});
