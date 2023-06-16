import { TouchableOpacity } from "react-native";
import { View , SafeAreaView , Text , StyleSheet , StatusBar } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Choose = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View className="h-screen flex bg-slate-700">
            <AntDesign name="arrowleft" size={24} color="white" />
                <Text className="text-2xl font-bold text-white" >Choose an account</Text>
                <View>
                <AntDesign name="facebook-square" size={24} color="black" />
                    <Text>Facebook</Text>
                <AntDesign name="google" size={24} color="black" />
                    <Text>Google</Text>
                </View>
                <Text>By clicking a social option you may recieve an SMS for
                    verification.Message and data rates may apply</Text>
                <TouchableOpacity >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    }
  })



 export default Choose