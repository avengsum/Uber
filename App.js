import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from './Screen/Login';
import { SafeAreaView , StyleSheet} from 'react-native';
import Choose from './Screen/Choose';
import OTP from './Screen/OTP';
import Name from './Screen/Name';
import Term from './Screen/Term';
import Home from './Screen/Home';

export default function App() {
  return (
    <SafeAreaView >
    <View>
      <Home />
    <StatusBar style="auto" />
    </View>
    </SafeAreaView>

  );
}



