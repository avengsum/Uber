import { TouchableOpacity } from "react-native";
import { View , SafeAreaView , Text  } from "react-native";

const Choose = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Choose an account</Text>
                <View>
                    <Image  />
                    <Text>Facebook</Text>
                    <Image />
                    <Text>Google</Text>
                </View>
                <Text>By clicking a social option you may recieve an SMS for
                    verification.Message and data rates may apply</Text>
                <TouchableOpacity >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



 export default Choose