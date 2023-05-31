/** Initial Screen */
import {
  useState,
  useEffect
} from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { styles } from './styles';

const Home = ({ route }) => {
  const [data, setData] = useState('');
  const { item } = route.params;

  // bool var
  let isLoading = true;
  let isComplete = false;
  let hasErrored = false;

  if(!loading){
    return <View>Loading</View>
  }

  function setRemoteConfig() {}

  function getFavorites() {}

  useEffect(() => {
    console.log('Loading component');
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Homes Delivery address: </Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
