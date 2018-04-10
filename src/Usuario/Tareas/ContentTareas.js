import React, { Component } from 'react';
import {  View, Text, Image, Alert} from 'react-native';
import Moment from 'moment';
import 'moment/locale/es';
import { Header, Left, Button, Body, Title, Right, Container, Content, List, ListItem, Card, CardItem, Spinner } from 'native-base';

export default class ContentTareas extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoading:true,
      isEmpty:true,
      dataSource:[]
    }
  }
  static navigationOptions = ({ navigation }) => ({
    header:(
      <Header style={{backgroundColor: "#3A79F7",}}>
                      <Left>
                          <Button transparent onPress={() => navigation.goBack()}>
                              <Image  source={require("../../images/arrow_back.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                          </Button>
                      </Left>
                      <Body>
                          <Title>{navigation.state.params.name}</Title>
                      </Body>
                      <Right />
                  </Header>
    )
  });
  
  componentDidMount(){
    fetch('https://www.ciaigandhi.com/Alumnos/Tareas/getTareas.php',{
      method:"post",
      header:{
        "Accept": "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        grupo:this.props.navigation.state.params.idgrupo,
        materia:this.props.navigation.state.params.idMat
      })
    })
    .then((response) => response.json())
    .then((responseJson) =>{
      if(responseJson !=null){
        this.setState({
          isLoading:false,
          isEmpty:false,
          dataSource:responseJson
        })
      }
      else{
        this.setState({
          isLoading:false
        })
      }
    })
    .catch((error) => {
      Alert.alert("Error de conexion","ocurrio un problema con tu conexion a internet. Intenta mas tarde")
    });
  }

  render() {
    Moment.locale('es');
    if(this.state.isLoading){
      return(
        <Container>
          <Content padder>
            <Spinner />
          </Content>
        </Container>
      )
    }
    if(this.state.isEmpty){
      return(
        <Container>
          <Content padder>
            <Text style={{color: "rgba(0,0,0,0.5)", fontSize:40, fontWeight:"bold",textAlign:"center"}}>No hay tareas por el momento...</Text>
          </Content>
        </Container>
      )
    }
    return (
      <Container>
        <Content padder>
          <List dataArray={this.state.dataSource} 
            renderRow ={(items) => {
              return(
                <Card>
                  <CardItem header>
                    <Text style={{fontSize:35, fontWeight:"bold"}}>{items.titulo}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{items.content}</Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text>para el {Moment(contenido.fentrega).format("LL")}</Text>
                  </CardItem>
                </Card>
              )
            }}
          />
        </Content>
      </Container>
    );
  }
}