import React from "react";
import {View, Text, Image, FlatList} from "react-native";
import styles from "./styles.js";
//import feed from '../../../assets/data/feedShops';
import Post from '../../components/PostShops';

const feed = [{
    id : 0,
    image : 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
    buisnessName : "Bonne poire",
    buisnessType : "vegan",
    pdv : "La bonne poire",
    address : "270 rue Saint-Jacques",
    addressDetail : "Maison des Mines et des Ponts"

},
{    id : 1,
    image : 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
    buisnessName : "Bonne pomme",
    buisnessType : "bio",
    pdv : "La bonne pomme",
    address : "56789 rue Saint-Jacques",
    addressDetail : "Maison"



}];

const ShopsFavorisScreen = (props) => {

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

export default ShopsFavorisScreen;