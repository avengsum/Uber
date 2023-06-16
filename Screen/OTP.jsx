import { useState ,useRef } from "react"
import { SafeAreaView } from "react-native"
import { TouchableOpacity ,View , Text ,TextInput , StyleSheet ,StatusBar} from "react-native"
import { AntDesign } from '@expo/vector-icons';



const OTP = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View className=" h-screen flex pt-10 pl-5 bg-slate-700">
          <AntDesign name="arrowleft" size={30} color="white" />
            <Text className="text-2xl font-bold mt-6 max-w-[320px] text-white">Enter the 4-digit code sent  to you at</Text>
            <Text className="text-white text-lg">84884804288.</Text>
            <Text>Resend code</Text>
            <TouchableOpacity>
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

export default OTP