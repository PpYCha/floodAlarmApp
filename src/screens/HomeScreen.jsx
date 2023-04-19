import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getWaterMeauser} from '../api/water_api';
import CustomButton from '../components/CustomButton';
import {Card, Button, Text, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [waterMeasure, setWaterMeasure] = useState([{}]);
  const [date, setDate] = useState();
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const color =
    waterMeasure.measure <= 49
      ? '#f1c01d'
      : waterMeasure.measure >= 50 && waterMeasure.measure <= 74
      ? '#f2891c'
      : '#bc1421';

  const textColor =
    waterMeasure.measure <= 49
      ? '#FFFFFF'
      : waterMeasure.measure >= 50 && waterMeasure.measure <= 74
      ? '#000000'
      : '#FFFFFF';

  const colorCode =
    waterMeasure.measure <= 49
      ? 'YELLOW'
      : waterMeasure.measure >= 50 && waterMeasure.measure <= 74
      ? 'ORANGE'
      : 'RED';

  const fetchWaterMeasure = async () => {
    let res = await getWaterMeauser();
    console.log('home log 41:', res.created_at);
    const timestamp = res.created_at;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', options);
    setDate(formattedDate);
    setWaterMeasure(res);
  };

  useEffect(() => {
    fetchWaterMeasure();
  }, []);

  const styles = StyleSheet.create({
    card: {
      margin: 16,
      flex: 1,
      backgroundColor: color,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: textColor,
    },
  });

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.text} variant="displayLarge">
          {colorCode}
        </Text>
        <Text style={styles.text} variant="titleSmall">
          As of: {date}
        </Text>
        {/* <Text style={[styles.text, {marginBottom: 10}]} variant="displayMedium">
          Current Water Level
        </Text> */}

        {/* 
        <Text style={styles.text} variant="headlineMedium">
          Legend
        </Text>
        <Text style={styles.text} variant="titleLarge">
          Flooding is possible
        </Text>
        <Text style={styles.text} variant="titleLarge">
          Flooding is threatening
        </Text>
        <Text style={styles.text} variant="titleLarge">
          Serious flooding expected in low-lying areas
        </Text> */}
        <View style={{aspectRatio: 1}}>
          <Image
            source={require('../assets/warning.png')}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </Card.Content>

      <Card.Actions>
        <Button
          icon={() => <Icon name="refresh-outline" size={20} />}
          mode="contained"
          onPress={() => {
            fetchWaterMeasure();
          }}>
          REFRESH
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default HomeScreen;
