import { View,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const TextInputComponent = props=> {
  return (
    <View>
     <TextInput
    style={[style.textInput,
      props.style,
    ]}
    onChangeText={props.onChangeText}
      keyboardType={props?.keyboardType}
    value={props.value}
    placeholder={props.placeholder}

    />
    </View>
  )
}
const style =StyleSheet.create({
    textInput:{
        width:'95%',
        borderRadius:10,
        padding: 10,
        borderWidth:1,
        marginTop:10,
        borderColor:'black'
    },
})

export default TextInputComponent