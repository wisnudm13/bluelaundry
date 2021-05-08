import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../../firebase';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confimPassword, setConfirmPassword] = useState('');
    const [address, setAdress] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            db.collection('users').doc(auth.currentUser.uid).set({
                name,
                email,
                address

            })
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>Register Screen</Text>
        
        <TextInput 
            style={styles.input} 
            placeholder={'Email'} 
            keyboardType={'email-address'}
            value={email}
            onChangeText={(text) => setEmail(text)}>

        </TextInput>

        <TextInput 
            style={styles.input} 
            placeholder={'Name'} 
            keyboardType={'default'}
            value={name}
            onChangeText={(text) => setName(text)}>

        </TextInput>

        <TextInput 
            style={styles.input} 
            placeholder={'Address'} 
            keyboardType={'default'}
            value={address}
            onChangeText={(text) => setAdress(text)}>

        </TextInput>

        <TextInput 
            style={styles.input} 
            placeholder={'Password'} 
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}>

        </TextInput>

        <TextInput 
            style={styles.input} 
            placeholder={'Confirm Password'} 
            secureTextEntry
            value={confimPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            onSubmitEditing={register}>

        </TextInput>
        
        <Pressable 
            onPress={() => register} 
            style={({pressed}) =>[
                {backgroundColor: pressed ? 'red': '#38b6ff'},styles.button]}>
            <Text 
                style={styles.buttonText}>Register</Text>
        </Pressable>

        <Pressable 
            onPress={() => navigation.navigate('Login')} 
            style={({pressed}) =>[
                {backgroundColor: pressed ? 'red': '#38b6ff'},styles.button]}>
            <Text 
                style={styles.buttonText}>Login</Text>
        </Pressable>
      </KeyboardAvoidingView>

      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#39618c',
        paddingHorizontal: 20,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
        fontSize: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    inputTextArea: {
        textAlignVertical: 'top',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
        fontSize: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    button: {
        marginTop: 5,
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        width: '100%'
    },
    buttonText : {
        fontSize: 15,
        color: '#fff',
    },
    

});

