/** Simple comp */
import React, { useState } from 'react'
import { View, Text } from 'react-native'

export default function index() {
  const [state, setState] = useState (true);
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}
