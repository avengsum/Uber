import { SafeAreaView ,View , Text, Image ,StyleSheet ,StatusBar, TextInput ,TouchableOpacity} from "react-native";
import React, { useState } from 'react';

const Login = () => {

    const [number ,setNumber] = useState()

    return(
        <SafeAreaView style={styles.container}>
        <View className="h-screen bg-slate-700">
                <Text className="text-gray-900 text-xl font-bold mt-2">Enter your mobile number</Text>
                <View>
                    <Image
                    className="h-10 w-14"
                     source={require('../assets/flag.jpg')} />
                     <TextInput
                     onChangeText={number => setNumber(number)}
                     value={number}
                     maxLength={10}
                     numeric
                     keyboardType={'numeric'}
                      />
                </View>
                <View>
                    <Text>
                        Or connect with social 
                    </Text>
                </View>
                <View>
                    <Text className="text-white text-center max-w-[300px]">By continuing you may recieve an SMS for
                    verification.Message and data rates may apply.</Text>
                    <TouchableOpacity >
                        <Text className="text-white">Next</Text>
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

export default Login