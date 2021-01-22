import React, {useState} from "react";
import {View, Text, Image, FlatList, TextInput} from "react-native";
import styles from "./styles.js";
import feed from '../../../assets/data/feed';
import Post from '../../components';
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";


const ShopsInfoScreen = (props) => {

    const [inputText, setInputText] = useState('');
    return (
        <View style = {styles.container}>
            <TextInput 
            style = {styles.textInput}
            placeholder = "Ma ville"
            value = {inputText}
            onChangeText = {setInputText}
            />
            
            <FlatList 
            data = {searchResults}
            renderItem = { (item) => (
                <View style = {styles.row}> 
                    <View style = {styles.iconContainer} >   </View>
                    <Entypo name = {"location-pin"} size = {25} />
                
                    <Text style = {styles.locationText}> {item.description} </Text> 
                </View>)}
            />
        </View>
    );

};

export default ShopsInfoScreen;