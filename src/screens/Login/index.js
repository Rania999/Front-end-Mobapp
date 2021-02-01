import React,{useState, Component} from 'react';
import {FlatList,TextInput, Button, View, Text, SafeAreaView, StatusBar, Image, Pressable, StyleSheet,} from 'react-native';
//import TextAnimator from "./TextAnimator";
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
                style={styles.textInput1}
                placeholder="Login" />

            <TextInput onChangeText={text => setPassword(text)}
                value={password}
                style={styles.textInput2}
                placeholder="Password" />

            <Pressable
                style={styles.button1}
                onPress={() => { navigation.navigate('Home'); } }
            >
                <Text style={styles.text}> Se connecter</Text>
            </Pressable>
            <Pressable
                style={styles.button2}
            >
                <Text style={styles.text}> Créer un compte</Text>
            </Pressable>

            <Text style={styles.textStyle1}>CARTE</Text>
            <Text style={styles.textStyle2}>CAROTTE</Text>




        </View>
    );
}

    
export default LoginScreen;