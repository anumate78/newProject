import React, { useState } from "react";
import { View, Text, StyleSheet, } from "react-native";
import TextInput from "../../component/TextInputComponent";
import Button from '../../component/CustomeButton'
import firestore from '@react-native-firebase/firestore'
import UUID from 'react-native-uuid'
const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const registerUser = () => {
        const userId = UUID.v4()
        firestore().collection("users").doc(userId).set({
            name:name,
            email:email,
            mobile:mobile,
            password:password,
            userId:userId
        }).then((data)=>console.log('data created '))
        .catch((err)=>console.log(err))
    }

    return (
        <View style={style.container}>
            <Text style={style.loginTitle}>Sign Up</Text>
            <View style={style.mainView}>
                <Text style={{ fontSize: 18, color: 'black' }}>Name</Text>
                <TextInput
                    onChangeText={text => {
                        setName(text)
                        console.log(text)
                    }}
                    value={name}
                    placeholder='Name'
                />
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Email</Text>
                    <TextInput
                        onChangeText={text => {
                            setEmail(text)
                            console.log(text)
                        }}
                        value={email}
                        placeholder='Email'
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Mobile</Text>
                    <TextInput
                        onChangeText={text => {
                            setMobile(text)
                            console.log(text)
                        }}
                        keyboardType='phone-pad'

                        value={mobile}
                        placeholder='Mobile'
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Password</Text>
                    <TextInput
                        onChangeText={text => {
                            setPassword(text)
                            console.log(text)
                        }}
                        value={password}
                        placeholder='Password'
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Confirm Password</Text>
                    <TextInput
                        onChangeText={text => {
                            setConfirmPass(text)
                            console.log(text)
                        }}
                        value={confirmPass}
                        placeholder='Confirm Password'
                    />
                </View>
            </View>
            <Button
                title='Sign Up'
                handlepress={() => registerUser()}
            />
            <Text onPress={()=>navigation.goBack()} style={{ color: 'black', alignSelf: 'center', textDecorationLine: 'underline', marginTop: 20, fontSize: 20, fontWeight: '600' }}>Or Login</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFFBF',

    },
    loginTitle: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 28,
        fontWeight: '500',
        marginTop: '10%'
    },
    mainView: {
        margin: 10,
        alignContent: 'center'
    },

})

export default SignUp;