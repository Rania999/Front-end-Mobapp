import React, {useState} from 'react';
import {FlatList,TextInput, Button, View, Text, StyleSheet, ImageBackground} from 'react-native';
import {encode} from 'base-64';
import {styles} from '/home/mobapp/Documents/kivappa/Styles/styles.js';


const PageMagasins = (props) => {
    return (<View>
    
        <ImageBackground source = {require('/home/mobapp/Documents/kivappa/Images/fond_vert_orange.jpeg')}
         style = {{
            width : 1000,
            height : "100%",
            resizeMode : "cover"       
          }}>

              
        </ImageBackground>
        <Text>Ceci est la page présentant les magasins</Text>
    </View>);
};


export default PageMagasins;