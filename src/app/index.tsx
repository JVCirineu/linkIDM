import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import { styles } from '../css/index.style';
import { Link } from 'expo-router';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text>Página Principal!</Text>

      <Image style={styles.imagens}
        source={require('../../assets/inicial.jpg')}
      />
    <Link style = {styles.btn}href={"/sobre"}>Clique aqui para ir para a página sobre</Link>
    <Link style = {styles.btn}href={"/contatos"}>Clique aqui para ir para a página contatos</Link>

      <StatusBar style="auto" />
    </View>
  );
};


