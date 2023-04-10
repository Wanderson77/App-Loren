import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { styles } from './style';

export default function index() {
  const [user, setUser] = useState('');

  return (
    <View
      style={styles.container}
    >
      <Text>index</Text>
    </View>
  )
}
