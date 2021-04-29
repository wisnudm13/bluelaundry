import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Login({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Register Screen</Text>

        <TextInput style={styles.input} placeholder={'Email'} keyboardType={'email-address'}>

        </TextInput>

        <TextInput style={styles.input} placeholder={'Name'} keyboardType={'default'}>

        </TextInput>

        <TextInput style={styles.input} placeholder={'Password'} secureTextEntry>

        </TextInput>

        <TextInput style={styles.input} placeholder={'Confirm Password'} secureTextEntry>

        </TextInput>
        
        <Button
            title="Login Here"
            onPress={() => navigation.navigate('Login')}
        />
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

