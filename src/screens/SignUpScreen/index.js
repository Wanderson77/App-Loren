import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native'
import { styles  } from './styles';

const SignUpScreen = () => {
  const [data, setData] = useState();

  async function fetchAPI() {
    try {

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text
          style={styles.welcome}
        >Bem-vindo!</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
