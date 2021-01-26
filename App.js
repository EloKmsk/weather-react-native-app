import React, { useEffect, useState } from 'react';
import { 
  Button, 
  FlatList, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  Image,
  TextInput, 
  TouchableOpacity,
  View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useFonts } from 'expo-font';
import axios from 'axios';
import Today from './components/Today';


export default function App() {

  return (
    <View style={styles.container}>
      <Today></Today>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#265ebf',
    marginTop: 20,
  },
});
