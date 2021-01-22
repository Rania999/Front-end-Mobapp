import React from "react";
import {View, Text, Image, FlatList} from "react-native";
import styles from "./styles.js";
import feed from '../../../assets/data/feed';
import Post from '../../components'

const ShopsInfoScreen = (props) => {

    const post = props.post;
    return (
        <View style = {styles.container}>
            
            <FlatList 
            data = {feed}
            renderItem = { (item) => <Post post = {item}/> }
            />
        </View>
    );

};

export default ShopsInfoScreen;