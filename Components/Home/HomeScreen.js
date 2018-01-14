import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Button } from 'native-base'
var backgroundImage = require('../../assets/HomeScreen/home_screen_background.jpg')
import * as firebase from 'firebase'

class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    componentDidMount() {

        firebase.auth().signInWithEmailAndPassword("nathvarun@hotmail.com", "password")
    }

    render() {
        return (
            <View style={styles.homeScreenView}>

                <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
                    <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
                </View>
                <Button
                    block={true}
                    onPress={() => this.props.navigation.navigate('SearchTabNavigator')}
                >
                    <Text style={{ color: 'white' }}> Search Beers</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    homeScreenView: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})


export default HomeScreen