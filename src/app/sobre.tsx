import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/index.style';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style = {styles.container}>
      <Text>Página sobre!</Text>

      <Image style={styles.imagens}
        source={require('../../assets/sobre.jpg')}
      />
      <Link style = {styles.btn}href={"/"}>Clique aqui para voltar pro inicio</Link>
      <Link style = {styles.btn}href={"/contatos"}>Clique aqui para ir para a página contatos</Link>

      <StatusBar style="auto" />
    </View>
  );
};


