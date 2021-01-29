import React from "react";
import {View, Text, Image, FlatList, Pressable} from "react-native";
import styles from "./styles.js";
import feed from '../../../assets/data/feedShops';
import Post from '../../components/PostShops';
import {useNavigation} from "@react-navigation/native";

const ShopsInfoScreen = (props) => {

    const post = props.post;
    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <Pressable style = {styles.filterButton}
            onPress = {() => navigation.navigate('Filter')}>
                <Text>Filtre</Text>

            </Pressable>
            
            <FlatList 
            data = {feed}
            renderItem = { (item) => <Post post = {item}/> }
            />
        </View>
    );

};

export default ShopsInfoScreen;