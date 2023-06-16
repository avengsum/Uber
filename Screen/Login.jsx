import { SafeAreaView ,View , Text, Image ,StyleSheet ,StatusBar, TextInput ,TouchableOpacity} from "react-native";
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const Login = () => {

    const [number ,setNumber] = useState()

    return(
        <SafeAreaView style={styles.container}>
        <View className="h-screen flex bg-slate-700">
                <Text className="text-white text-center text-3xl font-bold mt-14">Enter your mobile number</Text>
                <View className="flex flex-row mt-4 justify-center items-center">
                    <Image
                    className="h-10 justify-center mt-2 mr-8 items-center w-14"
                     source={require('../assets/flag.jpg')} />
                     <Text className="text-xl text-white mr-2 mt-2">+91</Text>
                     <TextInput
                     className="w-[50%] mt-2 text-slate-400 text-xl py-2  border-b-2 border-gray-100   "
                     onChangeText={number => setNumber(number)}
                     value={number}
                     maxLength={10}
                     numeric
                     keyboardType={'numeric'}
                      />
                </View>
                <View className="flex flex-row mt-4 ml-8 items-center">
                    <Text className="text-2xl text-center text-blue-500">
                        Or connect with social 
                    </Text>
                    <Text className="bg-blue-500 ml-4"><AntDesign name="arrowright" size={24} /></Text>
                    
                </View>
                <View className="mt-[500px]">
                    <Text className="text-white ml-8 text-md max-w-[320px]">By continuing you may recieve an SMS for
                       verification.Message and data rates may apply.</Text>
                    <View className="flex items-center justify-center mt-2 ">
                    <TouchableOpacity 
                    className="bg-black px-14 py-5"
                    >
                        <Text className="text-white text-xl">Next</Text>
                    </TouchableOpacity>
                    </View>
                    
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



export default Login