import React, { useEffect, useState, Component } from 'react';
import { 
  Button, 
  FlatList, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Image,
  View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useFonts } from 'expo-font';
import axios from 'axios';


export default function Today() {

    const [temperature, setTemp] = useState([]);
    const [mintemperature, setMintemp] = useState([]);
    const [description, setDescription] = useState([]);
    const [icon, setIcon] = useState([]);
  
    useEffect(() => {
      axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
      .then(res => {
        setTemp(res.data.daily[0].temp.day)
        setMintemp(res.data.daily[0].temp.min)
        setDescription(res.data.daily[0].weather[0].description)
        setIcon(res.data.daily[0].weather[0].icon)
      })
    }, [])
  
    return (
      <View style={styles.top}>
          <View style={styles.topleft}>
            <Text style={styles.text}>Today</Text>
            <Text style={styles.text}>{temperature}</Text>
            <Text style={styles.text}>{mintemperature}</Text>
          </View>
          <View style={styles.topright}>
              <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}/>
              <Text style={styles.text}>{description}</Text>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#265ebf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 150,
        height: 150,
    },
    top: {
        flex: 1,
        flexDirection: 'row'
    },
    topleft: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    topright: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
  });
