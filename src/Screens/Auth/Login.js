import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../component/TextInput';
import {useDispatch} from 'react-redux'
import { login } from '../../reducers/authReducer/AuthAction';
import RazorpayCheckout, { RazorpayOptions, RazorpaySuccessResponse, RazorpayErrorResponse } from 'react-native-razorpay'; // Make sure to import the appropriate package for your environment

const Login= ({navigation}) => {
    const dispatch = useDispatch()
    
    const [name, setName] = useState('')
    const [authToken,setAuthToken]=useState('')

    const loginButton = ()=>{
        // const options: RazorpayOptions = {
        //     description: 'Credits towards consultation',
        //     image: 'https://i.imgur.com/3g7nmJC.png',
        //     currency: 'INR',
        //     key: 'rzp_test_F4FcJwCA5MKVsE', // Your API key
        //     amount: '5000',
        //     name: 'foo',
        //     prefill: {
        //       email: 'void@razorpay.com',
        //       contact: '9191919191',
        //       name: 'Razorpay Software',
        //     },
        //     theme: { color: '#F37254' },
        //   };
          
        //   // Open the Razorpay checkout
        //   RazorpayCheckout.open(options)
        //     .then((data: RazorpaySuccessResponse) => {
        //       // Handle success
        //       console.log(`Success: ${data.razorpay_payment_id}`);
        //     })
        //     .catch((error: RazorpayErrorResponse) => {
        //       // Handle failure
        //       console.log(`Error: ${error.code} | ${error.description}`);
        //     });
          
        dispatch(login(name,authToken))
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center' }}>Welcome</Text>
            <CustomTextInput
                style={styles.customInput}
                placeholder='Username'
                onChangeText={(text) => {
                    setName(text)
                }}
                value={name}
            />
            <CustomTextInput
                style={styles.customInput}
                placeholder='Password'
                onChangeText={(text) => {
                    setAuthToken(text)
                }}
                value={authToken}
            />
            <TouchableOpacity 
            onPress={()=>loginButton()}
            style={styles.submitButton}>
                <Text>Sumbit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customInput: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        width:'70%',

    },
    submitButton: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        padding:10,
        borderRadius: 5,
        width:'50%',
        backgroundColor: 'gray'
    }
})


export default Login;