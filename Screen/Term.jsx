import { TouchableOpacity ,Text ,View ,StyleSheet , StatusBar } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Term = () => {
    return(
        <View style={styles.container}
        className="h-screen flex pt-10 pl-5 bg-slate-700 justify-between " 
        >
            <AntDesign name="arrowleft" size={30} color="white" />
            <View className="mb-[300px] items-center">
            <MaterialCommunityIcons name="human-greeting-variant" size={150} color="white" />
            <View>
            <Text className="text-white mt-4 text-lg ">By tapping the arrow below,you agree to Uber's
                Term of Use and acknowledge that you have read 
                the Privacy Policy</Text>
            </View>  
            </View>
            
            <View className="mb-10">
                <View className="mb-[100px]">
                <Text className="text-white text-md">Check the box to indicate that you
                are atleast 18 years of age,agree 
                to the <Text className="text-blue-400">Terms & condition</Text> and
                acknowledge the <Text className="text-blue-400">Privacy Policy.</Text> </Text>
                </View>
             <View className="flex items-center  justify-center">
                <TouchableOpacity className="bg-black px-14 py-5">
                <Text className="text-white text-xl">Next</Text>
            </TouchableOpacity>
            </View>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    }
  })

export default Term