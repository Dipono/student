import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const LoginPage = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        return navigation.navigate('student_dash')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.login}>SASO</Text>
            <View style={styles.loginContainer}>
                <Text style={styles.loginTesxt}>Welcome Back!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <View>
                    <Pressable style={styles.button} onPress={() =>handleLogin()}
                        title="Login">
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </View>
            </View>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000080',
        height: "100%",
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        marginTop: 30,
        textAlign: 'center'
    },
    login: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 50,
        padding: 30,
        textAlign: 'center',
        backgroundColor: '#0000ff',
    },
    loginContainer: {
        backgroundColor: 'white',
        margin: 10,
    },
    loginTesxt: {
        textAlign: 'center'
    },
    input: {
        fontWeight: 'bold',
        height: 40,
        backgroundColor: '#D9D9D9',
        marginBottom: 25,
        paddingHorizontal: 10,
        borderRadius: 5,
        margin: 10
    },
    button: {
        backgroundColor: '#007AFF',
        color: 'white',
        height: 55,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default LoginPage;