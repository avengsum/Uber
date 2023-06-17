import { useState } from 'react'
import { TouchableOpacity ,StyleSheet ,Image ,Text , TextInput , StatusBar ,View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const Home = () => {
    const [pickup ,setPickup] = useState('')
    return (
        <View style={styles.container}>
        <View className="h-[40vh]  bg-blue-600 pt-5 pl-6">
            <Feather name="menu"
             size={30} color="white" />
            <View className="flex  items-start">
            <Text className="text-3xl font-bold  text-white max-w-[250px]
            ">
            To find your pickup 
            location 
            automatically,
            turn on location service</Text>
            </View>
            <View className="w-36 pt-11">
            <TouchableOpacity className=" bg-black py-1 rounded-2xl hover:bg-slate-600">
                <Text className="text-center text-white">Turn on location</Text>
            </TouchableOpacity>
            </View>
            
            </View>
            <View className="h-[60vh] bg-slate-700">
            <View className="flex  flex-row justify-evenly mt-5 items-center">
              <View>
                <Image source={require('../assets/car.jpg')}
                 className="h-[100px] w-[100px] object-contain rounded-lg" />
                <Text className="text-white font-medium text-lg pt-2">Ride</Text>

              </View>
              <View>
              <Image source={require('../assets/package.jpg')}
              className="h-[100px] w-[100px] object-contain rounded-lg" />
            <Text className="text-white font-medium text-lg pt-2">Package</Text>
            </View>
            
            
            </View>
            <View className="pl-10 mt-8">
            <TextInput
            placeholder='Enter pickup point'
            className="text-xl border-2 py-2 pl-2 bg-slate-500 rounded-lg text-white w-[300px] border-gray-500"
            placeholderTextColor='#FFFFFF'
            value={pickup}
            onChangeText={pickup => setPickup(pickup)}
            />
            </View>
            
            <Text className="text-white text-lg pl-10 mt-5">Around you</Text>
            <View className="mt-5 pl-10">
            <Image source={require('../assets/map.jpg')}
            className="h-[200px] w-[300px] rounded-lg'"
             />
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

export default Home