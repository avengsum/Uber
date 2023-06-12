import { useState } from "react"
import { TextInput , View } from "react-native"

const Name = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    return(
        <View>
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

export default Name