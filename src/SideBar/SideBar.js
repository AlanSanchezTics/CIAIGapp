import React, { Component } from "react";
import { AppRegistry, Image, StatusBar, AsyncStorage } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Icon, Body, Right, Header, Footer, Button } from "native-base";
export default class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            grado:"",
            grupo:""
        }
    }
    getData = async ()=>{
        global.name = await AsyncStorage.getItem("name");
        global.grado = await AsyncStorage.getItem("grado");
        global.grupo = await AsyncStorage.getItem("grupo");
        this.setState({
            name:global.name,
            grado:global.grado,
            grupo:global.grupo
        })
      }
      componentDidMount(){
        this.getData();
      }
    logOut = async () =>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }
    render() {
        return (
          <Container >
              <Header style={{height:150,backgroundColor:"#0099cc"}}>
                    <Body style={{alignItems:"flex-start"}}>
                        <Image 
                            style={{height:48,width:48,}}
                            source={require("../images/user.png")}/>    
                        <Text style={{color:"#fff", fontWeight:"bold", paddingTop:10}}>{this.state.name}</Text>
                        <Text style={{color:"#fff", fontWeight:"bold"}}>Grupo:{this.state.grado} {this.state.grupo}</Text>
                    </Body>
                </Header>
              <Content>
                  <List>
                      <ListItem button onPress={() => this.props.navigation.navigate('Datos')}>
                        <Image source={require("../images/userIcon.png")} style={{width:20, height:20}}/>
                        <Text style={{fontSize:12,fontWeight: 'bold',}}> Datos del Alumno</Text>
                      </ListItem>
                      <ListItem button onPress={() => this.props.navigation.navigate('Avisos')}>
                          <Image source={require("../images/notification.png")} style={{width:20,height:20,}}/>
                          <Text style={{fontSize:12,fontWeight: 'bold',}}> Avisos del colegio</Text>
                      </ListItem>
                      <ListItem button onPress={() => this.props.navigation.navigate('Tareas')}>
                          <Image source={require("../images/hw.png")} style={{width:20,height:20,}}/>
                          <Text style={{fontSize:12,fontWeight: 'bold',}}> Mis Tareas</Text>
                      </ListItem>
                      <ListItem button onPress={() => this.props.navigation.navigate('Calificaciones')}>
                          <Image source={require("../images/calificaciones.png")} style={{width:20,height:20,}}/>
                          <Text style={{fontSize:12,fontWeight: 'bold',}}> Mis calificaciones</Text>
                      </ListItem>
                      <ListItem button onPress={() => this.props.navigation.navigate('Pagos')}>
                          <Image source={require("../images/calendar.png")} style={{width:20,height:20,}}/>
                          <Text style={{fontSize:12,fontWeight: 'bold',}}> Calendario de pagos</Text>
                      </ListItem>
                  </List>
              </Content>
              <Footer style={{backgroundColor: "#3A79F7",}}>
                  <Left>
                    <List>
                        <ListItem button onPress={this.logOut}>
                            <Image source={require("../images/logout.png")} style={{width:20,height:20, tintColor:"#fff"}}/>
                            <Text style={{color:"#fff", fontWeight:"bold", fontSize:14}}> Cerrar sesión</Text>
                        </ListItem>
                    </List>
                  </Left>
              </Footer>
          </Container>
        );
      }
}