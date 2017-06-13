/**
 * GreenUpVermont React Native App
 * https://github.com/johnneed/GreenUpVermont
 * @flow
 */
import React, {Component} from 'react';
import {
    Alert,
    AppRegistry,
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import App from './src/app';
import * as firebase from 'firebase';
import FireAuth from 'react-native-firebase-auth';
import logo from './assets/GreenupVermontlogo.png';
// Initialize Firebase
var firebaseConfig = {
    apiKey: 'AIzaSyAjwSCpOvLPgYcFr26V3gmfwJlGb-VtWAs',
    authDomain: 'greenupvermont-de02b.firebaseapp.com',
    databaseURL: 'https://greenupvermont-de02b.firebaseio.com',
    projectId: 'greenupvermont-de02b',
    storageBucket: 'greenupvermont-de02b.appspot.com',
    messagingSenderId: '439621369113'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};
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
    }
});
function register() {
    const {email, password, firstName, lastName} = this.state;
    FireAuth.register(email, password, {firstName, lastName});
}
function login() {
    FireAuth.login(this.state.email, this.state.password);
}
function facebookLogin() {
    FireAuth.facebookLogin();
}
function googleLogin() {
    Alert.alert('GOOGLE LOGIN PRESSED');
    FireAuth.googleLogin();
}
function logout() {
    FireAuth.logout();
}
function update() {
    FireAuth.update({firstName: this.state.firstName, lastName: this.state.lastName}).then(() => {
        Alert.alert('UPDATE SUCCESS');
    }).catch(err => {
        Alert.alert('UPDATE FAIL');
    });
}
function resetPassword() {
    FireAuth.resetPassword(this.state.email).then(() => {}).catch(err => {});
}
function updatePassword() {
    FireAuth.updatePassword(this.state.password).then(() => {}).catch(err => {});
}
function onLogin() {}
function onUserChange() {}
function onLogout() {}
function emailVerified() {}
function onError() {}
export default class GreenUpVermont extends Component {
    constructor(props) {
        super(props);
        this.onLogin = onLogin.bind(this);
        this.onUserChange = onUserChange.bind(this);
        this.onLogout = onLogout.bind(this);
        this.emailVerified = emailVerified.bind(this);
        this.onError = onError.bind(this);
        FireAuth.init({iosClientId: 'blahblahblah'}); // This is the CLIENT_ID found in your Google services plist.
    }
    componentDidMount() {
        FireAuth.setup(this.onLogin, this.onUserChange, this.onLogout, this.emailVerified, this.onError);
    }
    render() {
        return (< App googleLogin = {
            googleLogin
        } />);
    }
}
AppRegistry.registerComponent('GreenUpVermont', () => GreenUpVermont);
