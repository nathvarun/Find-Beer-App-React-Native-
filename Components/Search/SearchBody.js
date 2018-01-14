import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";

import { Content, ListItem, List } from 'native-base'
import * as firebase from 'firebase'

var currentUser
class SearchBody extends Component {


    addToFavourites = async (beerName) => {

        //get current user 
        currentUser = await firebase.auth().currentUser

        //get a unique key 
        var databaseRef = await firebase.database().ref(currentUser.uid).child('favourites').push()

        //update the beername at the unique key
        databaseRef.set({
            'name': beerName
        })

    }

    render() {

        const beerData = this.props.beerData


        return (

            <Content>
                <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <Image source={{ uri: beerData.labels.large }} style={{ height: 200, width: 200 }} />

                </ListItem>

                <List style={{ backgroundColor: 'white' }}>
                    <ListItem itemDivider>

                        <Text>Name</Text>
                    </ListItem>
                    <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text>{beerData.name}</Text>
                        </View>
                        <View >
                            <Button onPress={() => this.addToFavourites(beerData.name)} title="+ Favourites"></Button>
                        </View>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Category</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.style.category.name}</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Description</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.description}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Rating</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.abv}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Is is Organic?</Text>
                    </ListItem>
                    <ListItem>
                        <Text> {beerData.isOrganic == 'Y' ? 'Yes' : 'No'} </Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>
                            <Text> Availablity</Text>
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>{beerData.available.description ? beerData.available.description : 'No info'}</Text>
                    </ListItem>
                </List>
            </Content>

        );
    }
}
export default SearchBody;