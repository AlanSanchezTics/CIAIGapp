import React, { Component } from 'react';
import {  View, Text, Image, AsyncStorage,Alert} from 'react-native';
import { Header, Left, Button, Body, Title, Right, Container, Content, List, ListItem, Card, CardItem, Spinner } from 'native-base';
export default class ListMaterias extends Component {
    constructor(props){
        super(props)
        this.state={
        isLoading: true,
        isEmpty: true,
        dataSource:[],
        grupo:""
        }
    }
    getData = async ()=>{
        let idGrupo = await AsyncStorage.getItem("grupoToken");
        this.setState ({
            grupo:idGrupo
        })
        fetch('https://www.ciaigandhi.com/Alumnos/Tareas/getMaterias.php',{
            method:"post",
            header:{
              "Accept": "application/json",
              "content-type": "application/json",
            },
            body:JSON.stringify({
                idGrupo:idGrupo,
                tipoMat:1
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
            }
          })
    .catch((error) =>{
        Alert.alert("Error de conexion","ocurrio un problema con tu conexion a internet. Intenta mas tarde")
    });

    }
    componentDidMount(){
        this.getData();
    }
  render() {
      if(this.state.isLoading){
          return(
            <Container>
                <Content padder>
                    <Spinner />
                </Content>
            </Container>
          );
      }
      if(this.state.isEmpty){
        return(
            <Container>
                <Content padder>
                <Text style={{color: "rgba(0,0,0,0.5)", fontSize:40, fontWeight:"bold",textAlign:"center"}}>No hay Materias Asignadas Para el Alumno...</Text>
                </Content>
            </Container>
        )
    }
    return (
      <Container>
          <Content padder>
            <Card>
                <CardItem header>
                    <Text style={{fontSize:35, fontWeight:"bold"}}>Materias de Español</Text>
                </CardItem>
              <List dataArray={this.state.dataSource}
                renderRow={(rowData) => {
                    return(
                        <CardItem button onPress={() => this.props.navigation.navigate("Tareas",{idMat:rowData.id,name:"Tareas de "+rowData.name, idgrupo: this.state.grupo})}>
                            <Text>{rowData.name}</Text>
                            <Body />
                            <Right>
                                <Text>></Text>
                            </Right>
                        </CardItem>
                    );
                }}></List>
            </Card>
          </Content>
      </Container>
    );
  }
}
ListMaterias.navigationOptions = ({navigation}) => ({
    header:(
        <Header style={{backgroundColor: "#3A79F7",}}>
                      <Left>
                          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                              <Image  source={require("../../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                          </Button>
                      </Left>
                      <Body>
                          <Title>Tareas</Title>
                      </Body>
                      <Right />
                  </Header>
    )
})
