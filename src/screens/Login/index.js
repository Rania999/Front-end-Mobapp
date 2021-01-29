import React,{useState, Component} from 'react';
import {FlatList,TextInput, Button, View, Text, SafeAreaView, StatusBar, Image, Pressable, StyleSheet,} from 'react-native';
import TextAnimator from "./TextAnimator";
import {encode} from 'base-64';
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import react from 'react';



const LoginScreen=() => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/CarteCarotte_fondrondblanc.png')}
                style={styles.image}></Image>
            <TextInput onChangeText={text => setUserName(text)}
                value={userName}
                style={styles.textInput}
                placeholder="Login" />

            <TextInput onChangeText={text => setPassword(text)}
                value={password}
                style={styles.textInput}
                placeholder="Password" />

            <Pressable
                style={styles.button}
                onPress={() => { navigation.navigate('Home'); } }
            >
                <Text style={styles.text}> Se connecter</Text>
            </Pressable>
            <Pressable
                style={styles.button}
            >
                <Text style={styles.text}> Créer un compte</Text>
            </Pressable>

            <TextAnimator
                content='CARTE CAROTTE'
                textStyle={styles.textStyle}
                style={styles.containerstyle} />





        </View>
    );
}

    
export default LoginScreen;