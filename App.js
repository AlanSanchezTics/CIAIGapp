/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ToastAndroid
} from 'react-native';
import Index from "./src/InitialIndex";
global.name="";
global.grupo="";
global.grado="";
global.foto="";
global.token="";

var PushNotification = require('react-native-push-notification');

PushNotification.configure({
  onRegister: function(token) {
    global.token=token.token;
    
  },
  onNotification: function(notification) {
    setTimeout(() => {
      if(!notification['foreground']){
        ToastAndroid.show("Ve a la sección de Avisos...", ToastAndroid.show);
      }
    }, 1);
    PushNotification.localNotificationSchedule({
      title: notification['Message'],
      message: notification['Title'],
      bigText:notification['body'],
      date: new Date(Date.now())
    });
  },
  senderID:"660620235581",
});

export default class App extends Component {
  getData = async ()=>{
    global.name = await AsyncStorage.getItem("name");
    global.grado = await AsyncStorage.getItem("grado");
    global.grupo = await AsyncStorage.getItem("grupo");
  }
  componentDidMount(){
    this.getData();
  }
  render() {
    return (
      <Index />
    );
  }
}
