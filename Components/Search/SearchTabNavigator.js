import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Footer, FooterTab, Button, Icon } from 'native-base'


import { TabNavigator } from 'react-navigation'
import SearchTab from './tabNavigator/SearchTab'
import FavouritesTab from './tabNavigator/FavouritesTab'


const SearchTabNavigator = TabNavigator({
    SearchTab: { screen: SearchTab },
    FavouritesTab: { screen: FavouritesTab }
}, {

        initialRouteName: 'SearchTab',
        tabBarPosition: 'bottom',
        tabBarComponent: props => {
            return (

                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate('SearchTab')}
                        >
                            <Icon name="beer" />
                            <Text> Search</Text>

                        </Button>

                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate('FavouritesTab')}

                        >
                            <Icon name="star" />
                            <Text> Favourites</Text>
                        </Button>
                    </FooterTab>

                </Footer>

            )
        }
    })

export default SearchTabNavigator;