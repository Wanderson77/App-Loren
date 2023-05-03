/** Simple comp */
import { useState, useEffects } from 'react'
import { View, Text } from 'react-native'

export default function index() {
  const [state, setState] = useState (true);
  const [password, setPassword] = useState ('');
  const [user, setUser] = useState ();

  const greeting = 'Welcome to FB';

  function handleActionUser() {
    if (airbnbStyle){}
  }

  useEffects(() => {
    console.log(data);
  },[]);

  return (
    <View style={StyleSheet.container}>
      <Text>index</Text>
      <TouchableOpacity
        onPress={handleActionUser}
      >
      </TouchableOpacity>
    </View>
  )
}
