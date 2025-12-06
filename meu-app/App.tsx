import { StatusBar } from 'expo-status-bar';
//importa barra de status do expo 
import { StyleSheet, Text, View } from 'react-native';
//importa componentes do react native
import TelaDaListaDeTarefas from './components/TelaDaListaDeTarefas';
export default function App() {
  return (
    // visao principal que vai envolver toda a interface
    <View style={styles.container}>
      <TelaDaListaDeTarefas />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});