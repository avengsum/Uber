import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from './Screen/Login';

export default function App() {
  return (
    <View>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

