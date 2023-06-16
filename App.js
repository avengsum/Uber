import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from './Screen/Login';
import { SafeAreaView , StyleSheet} from 'react-native';
import Choose from './Screen/Choose';
import OTP from './Screen/OTP';

export default function App() {
  return (
    <SafeAreaView >
    <View>
      <OTP />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>

  );
}



