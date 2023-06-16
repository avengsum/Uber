import { useState } from "react"
import { SafeAreaView, TextInput , View ,Text } from "react-native"

const Name = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    return(
        <View style={styles.container}>
            <Text>What's your name?</Text>
            <TextInput
            value={first}
            onChangeText={first => setFirst(first)}
            placeholder="First"
            />
            <TextInput
            value={last}
            onChangeText={last => setLast(last)}
            placeholder="Last"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    }
  })

export default Name