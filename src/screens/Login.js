import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>

            <TextInput style={styles.input} placeholder={'Name'} keyboardType={'default'}>

            </TextInput>

            <TextInput style={styles.input} placeholder={'Password'} secureTextEntry>

            </TextInput>

            <TouchableOpacity>
                <Button
                    title="Register Here"
                    onPress={() => navigation.navigate('Register')}
                />
            </TouchableOpacity>

            
        </View>

      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    input: {
        padding: 10,
        width: '100%',
        fontSize: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red'
    }
    

});