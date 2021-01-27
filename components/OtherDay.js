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


export default function Other() {

    const [temperature1, setTemp1] = useState([]);
    const [mintemperature1, setMintemp1] = useState([]);
    const [description1, setDescription1] = useState([]);
    const [icon1, setIcon1] = useState([]);

    const [temperature2, setTemp2] = useState([]);
    const [mintemperature2, setMintemp2] = useState([]);
    const [description2, setDescription2] = useState([]);
    const [icon2, setIcon2] = useState([]);

    const [temperature3, setTemp3] = useState([]);
    const [mintemperature3, setMintemp3] = useState([]);
    const [description3, setDescription3] = useState([]);
    const [icon3, setIcon3] = useState([]);

    const [temperature4, setTemp4] = useState([]);
    const [mintemperature4, setMintemp4] = useState([]);
    const [description4, setDescription4] = useState([]);
    const [icon4, setIcon4] = useState([]);

    const [temperature5, setTemp5] = useState([]);
    const [mintemperature5, setMintemp5] = useState([]);
    const [description5, setDescription5] = useState([]);
    const [icon5, setIcon5] = useState([]);

    const [temperature6, setTemp6] = useState([]);
    const [mintemperature6, setMintemp6] = useState([]);
    const [description6, setDescription6] = useState([]);
    const [icon6, setIcon6] = useState([]);

    const [temperature7, setTemp7] = useState([]);
    const [mintemperature7, setMintemp7] = useState([]);
    const [description7, setDescription7] = useState([]);
    const [icon7, setIcon7] = useState([]);


    useEffect(() => {
      axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=4fb8f57eeca10e6f1b5391392c27142a')
      .then(res => {
        setTemp1(res.data.daily[1].temp.day)
        setMintemp1(res.data.daily[1].temp.min)
        setDescription1(res.data.daily[1].weather[0].description)
        setIcon1(res.data.daily[1].weather[0].icon)

        setTemp2(res.data.daily[2].temp.day)
        setMintemp2(res.data.daily[2].temp.min)
        setDescription2(res.data.daily[2].weather[0].description)
        setIcon2(res.data.daily[2].weather[0].icon)

        setTemp3(res.data.daily[3].temp.day)
        setMintemp3(res.data.daily[3].temp.min)
        setDescription3(res.data.daily[3].weather[0].description)
        setIcon3(res.data.daily[3].weather[0].icon)

        setTemp4(res.data.daily[4].temp.day)
        setMintemp4(res.data.daily[4].temp.min)
        setDescription4(res.data.daily[4].weather[0].description)
        setIcon4(res.data.daily[4].weather[0].icon)

        setTemp5(res.data.daily[5].temp.day)
        setMintemp5(res.data.daily[5].temp.min)
        setDescription5(res.data.daily[5].weather[0].description)
        setIcon5(res.data.daily[5].weather[0].icon)

        setTemp6(res.data.daily[6].temp.day)
        setMintemp6(res.data.daily[6].temp.min)
        setDescription6(res.data.daily[6].weather[0].description)
        setIcon6(res.data.daily[6].weather[0].icon)

        setTemp7(res.data.daily[7].temp.day)
        setMintemp7(res.data.daily[7].temp.min)
        setDescription7(res.data.daily[7].weather[0].description)
        setIcon7(res.data.daily[7].weather[0].icon)
      })
    }, [])


  
    return (
      <View style={styles.list}>
          <ScrollView>
            <View style={styles.base}>
                <View style={styles.first}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon1}@2x.png`}}/>
                </View>
                <View style={styles.second}>
                    <Text style={styles.text}>Thursday 28</Text>
                    <Text style={styles.desc}>{description1}</Text>
                </View>
                <View style={styles.third}>
                    <Text style={styles.text}>{temperature1}</Text>
                    <Text style={styles.desc}>{mintemperature1}</Text>
                </View>
            </View>
            <View style={styles.base}>
                <View style={styles.first}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon2}@2x.png`}}/>
                </View>
                <View style={styles.second}>
                    <Text style={styles.text}>Friday 29</Text>
                    <Text style={styles.desc}>{description2}</Text>
                </View>
                <View style={styles.third}>
                    <Text style={styles.text}>{temperature2}</Text>
                    <Text style={styles.desc}>{mintemperature2}</Text>
                </View>
            </View>
            <View style={styles.base}>
                <View style={styles.first}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon3}@2x.png`}}/>
                </View>
                <View style={styles.second}>
                    <Text style={styles.text}>Saturday 30</Text>
                    <Text style={styles.desc}>{description3}</Text>
                </View>
                <View style={styles.third}>
                    <Text style={styles.text}>{temperature3}</Text>
                    <Text style={styles.desc}>{mintemperature3}</Text>
                </View>
            </View>
            <View style={styles.base}>
                <View style={styles.first}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon4}@2x.png`}}/>
                </View>
                <View style={styles.second}>
                    <Text style={styles.text}>Sunday 31</Text>
                    <Text style={styles.desc}>{description4}</Text>
                </View>
                <View style={styles.third}>
                    <Text style={styles.text}>{temperature4}</Text>
                    <Text style={styles.desc}>{mintemperature4}</Text>
                </View>
            </View>
            <View style={styles.base}>
                <View style={styles.first}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon5}@2x.png`}}/>
                </View>
                <View style={styles.second}>
                    <Text style={styles.text}>Monday 1</Text>
                    <Text style={styles.desc}>{description5}</Text>
                </View>
                <View style={styles.third}>
                    <Text style={styles.text}>{temperature5}</Text>
                    <Text style={styles.desc}>{mintemperature5}</Text>
                </View>
            </View>
            <View style={styles.base}>
                <View style={styles.first}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon6}@2x.png`}}/>
                </View>
                <View style={styles.second}>
                    <Text style={styles.text}>Tuesday 2</Text>
                    <Text style={styles.desc}>{description6}</Text>
                </View>
                <View style={styles.third}>
                    <Text style={styles.text}>{temperature6}</Text>
                    <Text style={styles.desc}>{mintemperature6}</Text>
                </View>
            </View>
            <View style={styles.base}>
                <View style={styles.first}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon7}@2x.png`}}/>
                </View>
                <View style={styles.second}>
                    <Text style={styles.text}>Wednesday 3</Text>
                    <Text style={styles.desc}>{description7}</Text>
                </View>
                <View style={styles.third}>
                    <Text style={styles.text}>{temperature7}</Text>
                    <Text style={styles.desc}>{mintemperature7}</Text>
                </View>
            </View>
          </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        marginTop: 30
    },
    icon: {
        width: 60,
        height: 60
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    desc: {
        fontSize: 15,
        textAlign: 'center',
    },
    first: {
        flex: 1,
        flexDirection: 'column',
        margin: 'auto'
    },
    second: {
        flex: 1,
        flexDirection: 'column',
        margin: 'auto'
    },
    third: {
        flex: 1,
        flexDirection: 'column',
        margin: 'auto',
    },
    base: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    }
  });