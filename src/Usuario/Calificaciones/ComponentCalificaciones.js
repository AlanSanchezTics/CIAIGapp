import React, { Component } from 'react';
import { Image, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { Container, Content, Text, Header, Left, Button, Title, Right, Body, CardItem, Card, List, ListItem, Spinner } from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cell } from "react-native-table-component";
class componentCalificaciones extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            dataSource:[],
            dataSource2:[]
        }
    }
    getData= async () =>{
        let id = await AsyncStorage.getItem("userToken");

        fetch('https://www.ciaigandhi.com/Alumnos/Calificaciones/getCalificaciones.php',{
            method:"post",
            header:{
              "Accept": "application/json",
              "content-type": "application/json",
            },
            body:JSON.stringify({
                idAlumno:id,
                tipoMat:1
            })
        })
        .then((response) => response.json())
        .then((responseJson =>{
            if(responseJson != null){
                this.setState({
                    isLoading:false,
                    dataSource:responseJson
                })
            }
        }))
        .catch((error) =>{
            Alert.alert("Error de conexion","ocurrio un problema con tu conexion a internet. Intenta mas tarde")
            
        });

        fetch('https://www.ciaigandhi.com/Alumnos/Calificaciones/getCalificaciones.php',{
            method:"post",
            header:{
              "Accept": "application/json",
              "content-type": "application/json",
            },
            body:JSON.stringify({
                idAlumno:id,
                tipoMat:2
            })
        })
        .then((response) => response.json())
        .then((responseJson =>{
            if(responseJson != null){
                this.setState({
                    isLoading:false,
                    dataSource2:responseJson
                })
            }
        }))
        .catch((error) =>{
            Alert.alert("Error de conexion","ocurrio un problema con tu conexion a internet. Intenta mas tarde")
            
        });
        Alert.alert("Nota", "Recuerda que debes de acudir al colegio a firmar la boleta de enterado");
    }
    componentDidMount(){
        this.getData();
    }
  render() {
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
                  <Title>Calificaciones Bimestrales</Title>
              </Body>
              <Right />
          </Header>
          <Content padder>
            <Spinner />
          </Content>
            </Container>
        )
    }
    return (
      <Container>
          <Header style={{backgroundColor: "#3A79F7",}}>
              <Left>
                  <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                      <Image  source={require("../../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                  </Button>
              </Left>
              <Body>
                  <Title>Calificaciones Bimestrales</Title>
              </Body>
              <Right />
          </Header>
          <Content padder>
            <Content contentContainerStyle={{flexWrap:"wrap", alignItems:"center"}}>
                <Text style={{fontSize:30,fontWeight:'bold', textAlign:'center'}}>Colegio Indira gandhi</Text>
            </Content>
            <Content style={{backgroundColor: "#0076de", paddingHorizontal:20}}>
                <Text style={{
                            color:"#fff", 
                            fontSize:15, 
                            fontWeight:"bold",
                            fontStyle: 'italic',
                            paddingVertical:3,
                            textAlign:"center",}}>“Un buen principio para un futuro brillante”</Text>
            </Content>
            <Content contentContainerStyle={{flexWrap:"wrap", alignItems:"center", paddingBottom:10}}>
                <Text style={{paddingTop:5, fontWeight:"bold"}}>PRIMARIA: CCT 14PPR0561N</Text>
                <Text style={{color:"#D0D0D0",paddingBottom:5}}>Ciclo escolar 2017-2018</Text>
                <Text style={{fontSize:20,fontWeight:'bold', textAlign:'center'}}>Registro de Evaluaciones Bimestrales</Text>
            </Content>
            <Content>
                <Right>
                    <Content contentContainerStyle={{flexWrap:"wrap", borderColor:"#3A79F7",borderWidth:3}}>
                        <Image style={{width:90, height:120}} source={{uri:global.foto}}/>
                    </Content>
                </Right>
                <Text style={{fontSize:15,fontWeight:'bold',paddingTop:8}}>Alumno: {global.name}</Text>
                <Text style={{fontSize:15,fontWeight:'bold'}}>Grado: {global.grado}   Grupo: {global.grupo}</Text>
            </Content>
            {
            /*<Content contentContainerStyle={{flexWrap:"wrap", alignItems:"center"}}>
                <Text style={{fontWeight:"bold"}}>Docente Español</Text>
                <Text>Maria del Rosario</Text>
            </Content>*/
            }
                {/*tabla de calificaciones*/}
            <Content contentContainerStyle={{borderWidth:1}}>
            <Content contentContainerStyle={{flexGrow:1, backgroundColor:"#ADD6FF", borderWidth:1}}>
                <Text style={{textAlign:"center",fontSize:18,fontWeight: "bold", padding:5}}>Español</Text>
            </Content>
            <Content contentContainerStyle={{flexDirection:'row', borderWidth:1}}>
                    <Content contentContainerStyle={{width:200, backgroundColor:"#f1f8ff"}}>
                        <Text style={{fontWeight: "bold", padding:5}}>      Asignaturas      </Text>
                    </Content>
                    <Content contentContainerStyle={{flexDirection:"row", backgroundColor:"#f1f8ff"}}>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:12}}>I</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>II</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>III</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>IV</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>V</Text>
                    </Content>
            </Content>
            <Content contentContainerStyle={{flexDirection:'row', borderWidth:1}}>
                    <Content contentContainerStyle={{width: 150}}>
                        <List dataArray={this.state.dataSource}
                            renderRow={(rowData) =>{
                                return(
                                    <Text style={{padding:10}}>{rowData.name}</Text>
                                )
                            }}/>
                    </Content>
                    <Content contentContainerStyle={{flexDirection:"column",}}>
                    <List dataArray={this.state.dataSource}
                        renderRow={(items)=>{
                            return(
                                <Content contentContainerStyle={{flexDirection:'row',}}>
                                    <Text style={{paddingVertical:10,paddingHorizontal:10}}>{items.p1}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:10}}>{items.p2}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:10}}>{items.p3}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:12}}>{items.p4}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:12}}>{items.p5}</Text>
                                </Content>
                            )
                        }}/>
                    </Content>
            </Content>
            </Content>
            {/*Subjects table*/}
            <Content contentContainerStyle={{borderWidth:1}}>
            <Content contentContainerStyle={{flexGrow:1, backgroundColor:"#ADD6FF", borderWidth:1}}>
                <Text style={{textAlign:"center",fontSize:18,fontWeight: "bold", padding:5}}>English</Text>
            </Content>
            <Content contentContainerStyle={{flexDirection:'row', borderWidth:1}}>
                    <Content contentContainerStyle={{width:200, backgroundColor:"#f1f8ff"}}>
                        <Text style={{fontWeight: "bold", padding:5}}>      Subjects      </Text>
                    </Content>
                    <Content contentContainerStyle={{flexDirection:"row", backgroundColor:"#f1f8ff"}}>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:12}}>I</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>II</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>III</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>IV</Text>
                        <Text style={{fontWeight: "bold", paddingVertical:5,paddingHorizontal:10}}>V</Text>
                    </Content>
            </Content>
            <Content contentContainerStyle={{flexDirection:'row', borderWidth:1}}>
                    <Content contentContainerStyle={{width: 150}}>
                        <List dataArray={this.state.dataSource2}
                            renderRow={(rowData) =>{
                                return(
                                    <Text style={{padding:10}}>{rowData.name}</Text>
                                )
                            }}/>
                    </Content>
                    <Content contentContainerStyle={{flexDirection:"column",}}>
                    <List dataArray={this.state.dataSource2}
                        renderRow={(items)=>{
                            return(
                                <Content contentContainerStyle={{flexDirection:'row',}}>
                                    <Text style={{paddingVertical:10,paddingHorizontal:10}}>{items.p1}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:10}}>{items.p2}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:10}}>{items.p3}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:12}}>{items.p4}</Text>
                                    <Text style={{paddingVertical:10,paddingHorizontal:12}}>{items.p5}</Text>
                                </Content>
                            )
                        }}/>
                    </Content>
            </Content>
            </Content>
          </Content>
      </Container>
    );
  }
}
export default componentCalificaciones;
