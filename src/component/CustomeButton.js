// Project Import
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
const CustomeButton = props => {
    return (
            <TouchableOpacity
                style={[styles.buttonContainer]}
                onPress={props?.handlepress} activeOpacity={0.8}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    
    buttonContainer: {
        marginTop:5,
        alignItems: 'center',
        borderRadius: 12,
        width: '70%',
        alignSelf: 'center',
        padding:12,
        backgroundColor:'purple',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
});
export default CustomeButton;
