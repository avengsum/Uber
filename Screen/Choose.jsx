import { TouchableOpacity } from "react-native";
import { View , SafeAreaView , Text , StyleSheet , StatusBar } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Choose = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View className="h-screen flex pt-10 pl-5 bg-slate-700">
            <AntDesign name="arrowleft" size={30} color="white" />
            <View className="mt-6"> 
            <Text className="text-2xl font-bold text-white" >Choose an account</Text>
            </View>
                
                <View className="flex gap-2">
                <TouchableOpacity className="flex gap-5 flex-row">
                <AntDesign name="facebook-square" size={24} color="white" />
                    <Text className="text-white text-xl">Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex gap-5 flex-row">
                <AntDesign name="google" size={24} color="white" />
                    <Text className="text-white text-xl">Google</Text>
                </TouchableOpacity>
                
                </View>
                <Text className="text-white ml-2 mt-4 text-md max-w-[400px]">By clicking a social option you may recieve an SMS for
                    verification.Message and data rates may apply</Text>
                <View className="flex items-center mt-[400px] justify-center  ">
                <TouchableOpacity className="bg-black px-14 py-5" >
                    <Text className="text-white text-xl" >Next</Text>
                </TouchableOpacity>
                </View>
                
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