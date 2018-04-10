import React, { Component } from 'react';
import { StatusBar, Image, View, AsyncStorage, Alert} from "react-native";
import Moment from 'moment';
import 'moment/locale/es';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Spinner } from "native-base";

export default class AvisosPersonales extends Component {
    constructor(props){
        super(props)
        this.state={
        isLoading: true,
        isEmpty: true
        }
    }
    getData =async ()=>{
        let id = await AsyncStorage.getItem("userToken");

        fetch('https://www.ciaigandhi.com/Avisos/AvisosPersonales.php',{
            method:"post",
            header:{
              "Accept": "application/json",
              "content-type": "application/json",
            },
            body:JSON.stringify({
              idAlumno: id
              //idAlumno:global.id
            })
        })
        .then((response) => response.json())
        .then((responseJson) =>{
            if(responseJson != null){
              this.setState({
                isLoading: false,
                isEmpty: false,
                dataSource: responseJson
              })
          }else{
              this.setState({
                  isLoading:false
              })
          }
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
                            <Image  source={require("../../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Avisos para mi</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Spinner />
                </Content>
            </Container>
        );
    }
    if(this.state.isEmpty){
        return(
            <Container>
                <Header style={{backgroundColor: "#3A79F7",}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Image  source={require("../../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Avisos para mi</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                <Text style={{color: "rgba(0,0,0,0.5)", fontSize:40, fontWeight:"bold",textAlign:"center"}}>No hay Avisos por el momento...</Text>
                </Content>
            </Container>
        );
    }

    return(
        <Container>
            <Header style={{backgroundColor: "#3A79F7",}}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Image  source={require("../../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Avisos para mi</Title>
                </Body>
                <Right />
            </Header>
            <Content padder>
            <List 
                dataArray={this.state.dataSource}
                renderRow={(rowData) =>
                    <Card>
                        <CardItem header>
                            <Text style={{fontSize:35, fontWeight:"bold"}}>{rowData.titulo}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{fontSize:20}}>{rowData.descripcion}</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>para el {Moment(rowData.fechaAC).format('LL')}</Text>
                        </CardItem>
                    </Card>
                }
            />
            </Content>
        </Container>
    );

  }
}
