import React, { useState } from "react";
import { View, Text, StyleSheet, } from "react-native";
import TextInput from "../../component/TextInputComponent";
import Button from '../../component/CustomeButton'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const loginFunction = (test)=>{
        console.log(test)
    }

    return (
        <View style={style.container}>
            <Text style={style.loginTitle}>Login</Text>
            <View style={style.mainView}>
                <Text style={{ fontSize: 18, color: 'black' }}>Email</Text>
                <TextInput
                    onChangeText={text => {
                        setEmail(text)
                        console.log(text)
                    }}
                    value={email}
                    placeholder='Email'
                />
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Name</Text>
                    <TextInput
                        onChangeText={text => {
                            setName(text)
                            console.log(text)
                        }}
                        value={name}
                        placeholder='Name'
                    />
                </View>
            </View>
            <Button 
            title='Login'
            handlepress={() => loginFunction('oklk')}
            />
            <Text onPress={()=>navigation.navigate('SignUp')} style={style.orLogin}>Or SignUp</Text>
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
        marginTop: '40%'
    },
    mainView: {
        margin: 10,
        alignContent: 'center'
    },
orLogin:{
    color:'black',
    alignSelf:'center',
    textDecorationLine:'underline',
    marginTop:20,
    fontSize:20,
    fontWeight:'600'}
})

export default Login;