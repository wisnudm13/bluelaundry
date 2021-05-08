import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../../firebase';

export default function Login({navigation}) {

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style='light'/>
            <Image style={styles.logo} source={require('../images/logo_laundry.png')}/>

            <TextInput 
                style={styles.input} 
                placeholder={'Email'} 
                keyboardType={'email-address'}
                value={email}
                onChangeText={(text) => setEmail(text)}>

            </TextInput>

            <TextInput 
                style={styles.input} 
                placeholder={'Password'} 
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                //onSubmitEditing={signIn}
                >

            </TextInput>

            {/* <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> */}

            {/* <Pressable 
                onPress={signIn()}
                style={({pressed}) =>[
                    {backgroundColor: pressed ? 'red': '#38b6ff'},styles.button]}>
                <Text 
                    style={styles.buttonText}>Login</Text>
            </Pressable> */}

            <Pressable 
                onPress={() => navigation.navigate('Register')} 
                style={({pressed}) =>[
                    {backgroundColor: pressed ? 'red': '#38b6ff'},styles.button]}>
                <Text 
                    style={styles.buttonText}>Register</Text>
            </Pressable>

            <View style={{height: 50}}></View>

            <Button
                    style={styles.button}
                    title="Register Here"
                    onPress={() => signIn()}
                />

            

            
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
    logo: {
        width: 300,
        height: 300
    }
    

});