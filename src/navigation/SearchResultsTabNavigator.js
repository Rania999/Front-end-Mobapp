import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResultsScreen from "../screens/SearchResults";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    return(
        <Tab.Navigator tabBarOptions ={{activeTintColor : "#f15454",
        indicatorStyle : {backgroundColor : "#f15454"}}}>
            <Tab.Screen name = {"liste"} component={SearchResultsScreen}/>
            <Tab.Screen name = {"carte"} component={SearchResultsScreen}/>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;