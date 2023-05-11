import {
  View,
  Text,
  SafeAreaView
} from 'react-native'
import React from 'react'
import styles from './styles'

export default function index() {
  const greeting = 'Hello FB';

  return (
    <SafeAreaView>
      <View>
        <Text
          style={styles.welcome}
        >index</Text>
      </View>
    </SafeAreaView>
  )
}
