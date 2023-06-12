import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from './Screen/Login';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Login />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
      marginTop:StatusBar.currentHeight
  }
})

