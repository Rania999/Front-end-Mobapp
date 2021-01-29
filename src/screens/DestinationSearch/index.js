import React, {useState} from "react";
import {View, Text, Image, FlatList, TextInput, Pressable} from "react-native";
import styles from "./styles.js";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";
import get from "../../functions/sendRequest";

const SearchScreen = (props) => {

    const navigation = useNavigation();
    const [location, setLocation] = useState('');
    const [listOfLocations, setListOfLocations] = useState([]);

    return (
        <View style = {styles.container}>
            {/*
            <Pressable style = {styles.buttonListOrMap}>
                <Text style = {styles.ListOrMapText}> Liste</Text>
            </Pressable>

            <Pressable style = {styles.buttonListOrMap}>
                <Text style = {styles.ListOrMapText}> Plan</Text>
            </Pressable> */}
            
            <TextInput 
            style = {styles.textInput}
            placeholder = "Ma ville"
            value = {location}
            onChangeText = {(txt) => {{setLocation(txt)} }}//; get(txt, setListOfLocations, "/FdC/2")}}
            />
            
            <FlatList 
            data = {searchResults}
            renderItem = { (item) => (
                <Pressable style = {styles.row}
                onPress = {() => {navigation.navigate('Search results')}}> 
                    <View style = {styles.iconContainer} > 
                    <Entypo name = {"location-pin"} size = {25} />  
                    <Text style = {styles.locationText}> {item.item.description} </Text> 
                    </View>
                </Pressable>)}
            />
            
        </View>
  );
};





export default SearchScreen;