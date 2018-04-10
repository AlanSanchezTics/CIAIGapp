import React, { Component } from 'react';
import {  StyleSheet,View, Text, TextInput, TouchableOpacity,StatusBar} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
     <View style={styles.container}>
     <StatusBar
        barStyle="light-content"/>
         <TextInput 
            onSubmitEditing={() =>this.passwordInput.focus()} 
            placeholder="Usuario o No. de Control" 
            returnKeyType="next" 
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="rgba(255,255,255,0.7)" 
            style={styles.Inputs}/>
         <TextInput 
            ref={(input) => this.passwordInput = input} 
            placeholder="Contraseña" 
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry 
            returnKeyType="go" 
            placeholderTextColor="rgba(255,255,255,0.7)" 
            style={styles.Inputs}/>
        <TouchableOpacity style={{backgroundColor: '#4C85F7',paddingVertical:15, borderRadius:10, alignItems: 'center'}}>
            <Text style={{color:"#fff",fontSize:15,fontWeight:'bold'}}>Ingresar</Text>
        </TouchableOpacity>
     </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    Inputs:{
        height: 50,
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color:'#fff',
        paddingHorizontal: 10,
    }
});