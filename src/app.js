// @flow

import React, {Component} from 'react';
import {
    Alert,
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import logo from '../assets/GreenupVermontlogo.png';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
});

export default class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={logo}/>
                <Text style={styles.welcome}>
                    Welcome to the Green Up Vermont App!
                </Text>
                <Text style={styles.instructions}>
                    Congratulations you got this app running!
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Button
                    onPress={this.props.googleLogin}
                    title="Login with Google"
                    accessibilityLabel="Login With Google"
                />
            </View>
        );
    }
}
