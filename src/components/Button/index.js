/** Simple comp */
import { useState, useEffects } from 'react'
import { View, Text } from 'react-native'

export default function index() {
  const [state, setState] = useState (true);
  const [password, setPassword] = useState ('');

  useEffects(() => {

  },[]);

  return (
    <View style={StyleSheet.container}>
      <Text>index</Text>
    </View>
  )
}
