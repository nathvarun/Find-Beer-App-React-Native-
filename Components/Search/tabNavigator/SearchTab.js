import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Keyboard
} from "react-native";
import axios from 'axios'

import { Container, Content } from 'native-base'
import SearchHeader from '../SearchHeader'
import SearchBody from '../SearchBody'

class SearchTab extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        searchBeer: '',
        beerData: {},
        beerFound: false
    }

    componentDidMount() {

        if (this.props.navigation.state.params !== undefined) {
            this.setState({ searchBeer: this.props.navigation.state.params.beerName }, () => this.beerSearch())
        }
    }

    beerSearch = () => {

        console.log(this.state.searchBeer)
        Keyboard.dismiss()
        const beerName = this.state.searchBeer.toLowerCase();

        const query = `https://api.brewerydb.com/v2/search?q=` + beerName + `&type=beer&key=2e97681b46666b733eaf24a940bc7e85`

        axios.get(query)
            .then((response) => {

                var data = response.data.data[0] ? response.data.data[0] : false
                console.log(data)

                if (data) {
                    this.setState({
                        beerData: data,
                        beerFound: true
                    })
                }
            }).catch((error) => {

                this.setState({
                    beerFound: false
                })
            })
    }

    renderContent = () => {

        if (this.state.beerFound) {
            return <SearchBody beerData={this.state.beerData} />
        }
        else {
            console.log("beer not found")
        }
    }

    render() {
        return (
            <Container>

                <SearchHeader
                    value={this.state.searchBeer}
                    onChangeText={(searchBeer) => this.setState({ searchBeer })}
                    beerSearch={this.beerSearch}
                />


                {this.renderContent()}
            </Container>
        );
    }
}
export default SearchTab;