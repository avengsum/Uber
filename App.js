import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from './Screen/Login';
import { SafeAreaView , StyleSheet} from 'react-native';
import Choose from './Screen/Choose';
import OTP from './Screen/OTP';
import Name from './Screen/Name';
import Term from './Screen/Term';

export default function App() {
  return (
    <SafeAreaView >
    <View>
      <Term />
    <StatusBar style="auto" />
    </View>
    </SafeAreaView>

  );
}



