import { TouchableOpacity } from "react-native"
import { View } from "react-native"

const Term = () => {
    return(
        <View>
            <Image />
            <Text>By tapping the arrow below,you agree to Uber's
                Term of Use and acknowledge that you have read 
                the Privacy Policy</Text>
            <Text>Check the box to indicate that you
                are atleast 18 years of age,agree 
                to the <Text>Terms & condition</Text> and
                acknowledge the <Text>Privacy Policy.</Text> </Text>
            <TouchableOpacity>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Term