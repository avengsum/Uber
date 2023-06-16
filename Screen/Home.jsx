import { useState } from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Home = () => {
    const [pickup ,setPickup] = useState('')
    return (
        <View style={styles.container}>
            <Image source={require('../assets/menu.webp')} />
            <Text>To find your pickup location automatically, turn on location service</Text>
            <TouchableOpacity>
                <Text>Turn on location</Text>
            </TouchableOpacity>
            <Image source={require('../assets/car.webp')} />
            <Image source={require('../assets/package.avif')} />
            <TextInput
            placeholder='Enter pickup point'
            value={pickup}
            onChangeText={pickup => setPickup(pickup)}
            />
            <Text>Around you</Text>
            <Image source={require('../assets/map.jfif')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    }
  })

export default Home