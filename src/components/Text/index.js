import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './style';

export default function index() {
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function handleActionUser(){
    console.log('Mobile Marketing');
  }

  useEffect(() => {
    console.log("Native");
  },[]);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>index</Text>
      <TouchableOpacity style={styles.buttonContainer}>

      </TouchableOpacity>
    </View>
  )
}
