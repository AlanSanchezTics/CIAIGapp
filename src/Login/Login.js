import React, { Component } from 'react';
import { Alert,AsyncStorage,View, Text, StyleSheet, Image, KeyboardAvoidingView,TextInput, TouchableOpacity,ActivityIndicator} from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:'',
      pass:'',
      isLoading: false
    }
  }
  logeo = async () =>{
    this.setState({
      isLoading:true
    })
    const {user}=this.state;
    const {pass} = this.state;
    fetch('https://www.ciaigandhi.com/LoginIOS.php',{
      method:"post",
      header:{
        "Accept": "application/json",
        "content-type": "application/json",

      },body: JSON.stringify({
        usuario: user,
        clave: pass,
        token: global.token
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading:false
      })
      if(responseJson=="" || responseJson=="empty" || responseJson==null){
        Alert.alert("Datos erroneos","verifica los datos");
      }else{
        AsyncStorage.setItem('userToken', responseJson.idAlumno);
        AsyncStorage.setItem('grupoToken', responseJson.idGrupo);
        AsyncStorage.setItem('name',responseJson.name+" "+responseJson.apat+" "+responseJson.amat);
        AsyncStorage.setItem('grado',responseJson.grado);
        AsyncStorage.setItem('grupo', responseJson.grupo);
        global.name=responseJson.name+" "+responseJson.apat+" "+responseJson.amat;
        global.grado=responseJson.grado;
        global.grupo=responseJson.grupo;
        this.props.navigation.navigate('App');
      }
    })
    .catch((error) =>{
      Alert.alert("Error de conexion","ocurrio un problema con tu conexion a internet. Intenta mas tarde")
    });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex:1,backgroundColor: '#3A79F7',}}>
        <View style={styles.logoContainer}>
          <Image style={styles.Logo}
            source={require('../images/user.png')}
          />
          <Text style={{fontSize: 20,fontWeight: 'bold',color:'#fff', marginTop: 10,}}>CIAIG</Text>
          <Text style={{fontSize: 15,fontWeight: 'bold',color:'#fff', marginTop: 5, paddingBottom:10}}>Control integral del Alumno</Text>
          <ActivityIndicator size="large" color="#0000ff"/>
          <Text style={{fontSize: 20,fontWeight: 'bold',color:'#fff', marginTop: 10,}}>Espera un momento...</Text>
        </View>
        </View>
      );
    }
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.Logo}
            source={require('../images/user.png')}
          />
          <Text style={{fontSize: 20,fontWeight: 'bold',color:'#fff', marginTop: 10,}}>CIAIG</Text>
          <Text style={{fontSize: 15,fontWeight: 'bold',color:'#fff', marginTop: 5,}}>Control integral del Alumno</Text>
        </View>

      <View style={styles.formContainer}> 

         <TextInput 
            onSubmitEditing={() =>this.passwordInput.focus()} 
            placeholder="Usuario o No. de Control"
            keyboardType="numeric" 
            returnKeyType="next" 
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={user =>this.setState({user})}
            placeholderTextColor="rgba(255,255,255,0.7)" 
            style={styles.Inputs}/>
         <TextInput 
            ref={(input) => this.passwordInput = input} 
            keyboardType="numeric" 
            placeholder="Contraseña" 
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry 
            onChangeText ={pass => this.setState({pass})}
            returnKeyType="go" 
            placeholderTextColor="rgba(255,255,255,0.7)" 
            style={styles.Inputs}/>
        <TouchableOpacity style={{backgroundColor: '#4C85F7',paddingVertical:15, borderRadius:10, alignItems: 'center'}} onPress={this.logeo}>
            <Text style={{color:"#fff",fontSize:15,fontWeight:'bold'}}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#3A79F7',
    },
    logoContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    Logo:{
      width: 90,
      height:90
    },
    formContainer:{
      padding:20
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


