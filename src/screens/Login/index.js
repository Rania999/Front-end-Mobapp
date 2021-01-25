import React, {useState} from 'react';
import {FlatList,TextInput, Button, View, Text, SafeAreaView, StatusBar, Image, Pressable} from 'react-native';
import {encode} from 'base-64';
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";


const LoginScreen = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();


    return(
        <View>
            <TextInput onChangeText = {text => setUserName(text)}
            value = {userName}
            style = {styles.textInput}
            placeholder = "Login"/>

            <TextInput onChangeText = {text => setPassword(text)}
            value = {password}
            style = {styles.textInput}
            placeholder = "Password"/>

            <Pressable
            style = {styles.button}
            onPress = {() => {navigation.navigate('Home')}}
            >
                <Text style = {styles.text}> Se connecter</Text>
            </Pressable>
            <Pressable
            style = {styles.button}
            >
                <Text style = {styles.text}> Créer un compte</Text>
            </Pressable>



        </View>
    )
}

export default LoginScreen;