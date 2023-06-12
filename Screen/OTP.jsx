import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { TextInput } from "react-native"

const OTP = () => {
    const [otp , setOtp] = useState()
    return (
        <View>
            <Text>Enter the 4-digit code sent  to you at</Text>
            <TextInput

            />
            <Text>Resend code</Text>

            <TouchableOpacity>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OTP