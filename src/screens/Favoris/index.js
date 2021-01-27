import React from "react";
import {View,Text,Image,FlatList} from "react-native";
import styles from "./styles.js";
import {ImageBackground} from "react-native";
//import feed from '../../../assets/data/feedShops';
import Post from '../../components/PostShops';

const feed = [{
    id : 0,
    image : 'https://images.squarespace-cdn.com/content/v1/59592d5ae4fcb5168c5b510b/1522465771174-28FXVG50676576CDL7ZG/ke17ZwdGBToddI8pDm48kJLgwKmKk8AgAOB3jZFGXnR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXO1dFDV7KTJTDmXanevfUPI82AFb8-9AuB4pNFabI74zJ3y1GVAgTyRMPhW8ZG1fA/Floral+Boutique+set.jpg?format=750w',
    
    buisnessName : "Bonne poire",
    buisnessType : "vegan",
    pdv : "Epi'Fleurs",
    address : "270 rue Saint-Jacques",
    addressDetail : "Maison des Mines et des Ponts"

},
{    id : 1,
    image : 'https://myphotocollage.files.wordpress.com/2014/05/the-farm-house-dubai-my-custard-pie-1.jpg',
    buisnessName : "Bonne pomme",
    buisnessType : "bio",
    pdv : "La bonne pomme",
    address : "56789 rue Saint-Jacques",
    addressDetail : "Maison"



}

];

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