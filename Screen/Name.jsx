import { useState } from "react"
import { SafeAreaView, TextInput ,StatusBar, View ,Text , TouchableOpacity , StyleSheet} from "react-native"
import { AntDesign } from '@expo/vector-icons';

const Name = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    return(
        <View style={styles.container}
        className="h-screen flex pt-10 pl-5 bg-slate-700"
        >
             <AntDesign name="arrowleft" size={30} color="white" />
            <Text className="text-white text-xl mt-4">What's your name?</Text>
            <View className="flex flex-row gap-10 mt-[1px]">
            <TextInput
            value={first}
            onChangeText={first => setFirst(first)}
            placeholder="First"
            placeholderTextColor='#FFFFFF'
            className="border-b-2 w-[140px] text-xl text-white border-gray-100"
            
            />
            <TextInput
            value={last}
            onChangeText={last => setLast(last)}
            placeholder="Last"
            placeholderTextColor='#FFFFFF'
            className="border-b-2 text-xl text-white w-[140px] border-gray-100"
            />
            </View>

            <View className="flex items-center mt-[520px] justify-center">
                <TouchableOpacity className="bg-black px-14 py-5" >
                    <Text className="text-white text-xl" >Next</Text>
                </TouchableOpacity>
                </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    }
  })

export default Name