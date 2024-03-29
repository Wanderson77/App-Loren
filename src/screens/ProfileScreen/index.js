import { useState } from 'react';

import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
  } from 'react-native';

export default function ProfileScreen() {
  const [error, setError] = useState(false);

  async function fetchAPI() {
    try {

    } catch (error) {
      console.log('Failed to fetch', error);
    }
  }

  useEffect(() => {
    console.log('Mounted component');
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Image
          source={require('./src/assets/logo.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}
