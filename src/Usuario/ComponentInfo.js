import React, { Component } from 'react';
import { StatusBar, Image, View,AsyncStorage, Alert} from "react-native";
import Moment from 'moment';
import 'moment/locale/es';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Spinner } from "native-base";

export default class ComponentInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            data:[],
        }
    }
    getData=async () =>{
        let id = await AsyncStorage.getItem("userToken");
        fetch('https://www.ciaigandhi.com/Alumnos/getDatosIOS.php',{
            method:'post',
            header:{
              "Accept": "application/json",
              "content-type": "application/json",
            },body: JSON.stringify({
                idAlumno: id
            })
        })
        .then((response) => response.json())
        .then((responseJson) =>{
            if(responseJson.nivel ==1){
                responseJson.nivel="Preescolar";
            }else if(responseJson.nivel==2){
                responseJson.nivel="Primaria";
            }
              this.setState({
                  isLoading: false,
                  data: responseJson});
                  global.foto=responseJson.foto;
        })
        .catch((error) =>{
          Alert.alert("Error de conexion","ocurrio un problema con tu conexion a internet. Intenta mas tarde")
        });
    }
    componentDidMount(){
        this.getData()
    }

  render() {
    Moment.locale('es');
      if(this.state.isLoading){
        return(
        <Container>
        <Header style={{backgroundColor: "#3A79F7",}}>
            <Left>
                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Image  source={require("../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                </Button>
            </Left>
            <Body>
                <Title>Datos del Alumno</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
        <Spinner />
        </Content>
        </Container>
        );}
    return (
      <Container>
          <Header style={{backgroundColor: "#3A79F7",}}>
              <Left>
                  <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                      <Image  source={require("../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                  </Button>
              </Left>
              <Body>
                  <Title>Datos del Alumno</Title>
              </Body>
              <Right />
          </Header>
          <Content padder>
            <Card>
                <CardItem>
                    <Body>
                    <Content contentContainerStyle={{flexWrap:"wrap", alignItems:"center"}}>
                    <Text style={{fontSize:30, fontWeight:'bold',paddingTop:10,paddingBottom:5, textAlign: "center"}}> Colegio Indira Gandhi</Text>
                    <View style={{ backgroundColor: "#0076de", paddingHorizontal:20}}>
                        <Text style={{
                            color:"#fff", 
                            fontSize:15, 
                            fontWeight:"bold",
                            fontStyle: 'italic',
                            paddingVertical:3,
                            textAlign:"center",}}>“Un buen principio para un futuro brillante”</Text>
                    </View>
                    <Text style={{paddingTop:5, fontWeight:"bold"}}>PRIMARIA: CCT 14PPR0561N</Text>
                    <Text style={{color:"#D0D0D0",paddingBottom:5}}>Ciclo escolar 2017-2018</Text>
                    <Content contentContainerStyle={{flexWrap:"wrap", borderColor:"#3A79F7",borderWidth:3}}>
                        <Image style={{width:90, height:120}} source={{uri: this.state.data.foto }}/>
                    </Content>
                    </Content>
                    <View style={{paddingTop:15,}}>
                        <Text style={{fontSize: 20,paddingBottom:0}}>Nombre: <Text>{this.state.data.name} {this.state.data.A_paterno} {this.state.data.A_materno}</Text></Text>
                        <Text style={{fontSize: 20,paddingBottom:0}}>Grado: <Text>{this.state.data.grado}</Text>  <Text>Grupo: <Text>{global.grupo}</Text></Text></Text>
                        <Text style={{fontSize: 20,paddingBottom:0}}>Telefono: <Text>{this.state.data.telefono}</Text></Text>
                        <Text style={{fontSize: 20,paddingBottom:0}}>Correo: <Text>{this.state.data.correo}</Text></Text>
                        <Text style={{fontSize: 20,paddingBottom:0}}>Nivel: <Text>{this.state.data.nivel}</Text></Text>
                        <Text style={{fontSize: 20,paddingBottom:0}}>Ingreso: <Text>{Moment(this.state.data.fechaI).format('LL')}</Text></Text>
                    </View>
                    </Body>
                </CardItem>
            </Card>
          </Content>
      </Container>
    );
  }
}
