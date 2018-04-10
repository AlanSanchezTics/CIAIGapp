import React, { Component } from 'react';
import { StatusBar, Image, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Moment from 'moment';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Spinner, List } from "native-base";

export default class ComponentPagos extends Component {
  render() {
    return(
        <Container>
            <Header style={{backgroundColor: "#3A79F7",}}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Image  source={require("../../images/md-menu.png")} style={{width:24,height:24, tintColor:"#fff"}}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Fechas de pago</Title>
                </Body>
                <Right />
            </Header>
            <ScrollView contentContainerStyle={styles.container}>
        <View style={{alignItems:'center',flexWrap:"wrap"}}>
        <Text style={{fontSize:30, fontWeight:'bold',paddingTop:10,paddingBottom:5}}> Colegio Indira Gandhi</Text>
        <View style={{ backgroundColor: "#0076de",}}>
            <Text style={{
                color:"#fff", 
                fontSize:15, 
                fontWeight:"bold",
                fontStyle: 'italic',
                paddingVertical:3,
                paddingHorizontal:25,}}>“Un buen principio para un futuro brillante”</Text>
        </View>
        <Text style={{fontWeight:"bold"}}>MATERNAL, PREESCOLAR Y PRIMARIA</Text>
        <Text style={{fontWeight:"bold"}}>RFC: KMC040813KC1</Text>
        <Text style={{fontWeight:"bold", textAlign:"center"}}>JAMAICA 1505 / GUAYAQUIL 505, COL. LAZARO CARDENAS</Text>
        <Text style={{fontWeight:"bold"}}>TELS. 222 35 48 Y 222 01 96</Text>
        <Text style={{fontWeight:"bold"}}>PUERTO VALLARTA JAL. C.P 48330</Text>
        </View>
        <Text style={{paddingTop:10, fontWeight:"bold", fontSize: 25, textAlign:"center"}}>TARJETA DE CONTROL DE PAGOS</Text>
        <Image
            source={require("../../images/calendario.png")}
            style={{width:370, height:510}}
        />
        <Image
            style={{width:200, height:100}}
            source={require("../../images/banco.png")}
        />
        <View style={{backgroundColor:"#3A79F7", padding:8,borderRadius:4}}>
        <Text style={{color:"#fff"}}><Text style={{fontWeight:"bold"}}>RAZON SOCIAL</Text>: KINDER MADAM CURIE DE PUERTO VALLARTA AC.</Text>
        <Text style={{color:"#fff"}}><Text style={{fontWeight:"bold"}}>SUC.</Text> 442    <Text style={{fontWeight:"bold"}}>N° DE CUENTA</Text>: 92-00188714-7</Text>
        <Text style={{color:"#fff"}}><Text style={{fontWeight:"bold"}}>CLABE</Text>: 014375920018871475</Text>
        </View>
        <Text style={{paddingTop:10, fontWeight:"bold", fontSize: 25, textAlign:"center"}}>INSTRUCCIONES DE PAGO</Text>
        <Text style={{paddingVertical:5,fontSize:18}}><Text style={{fontWeight:"bold"}}>A) COLEGIO</Text>: En la administración, presente su tarjetón para hacer su pago en efectivo o tarjeta de crédito.</Text>
        <Text style={{paddingVertical:5,fontSize:18}}><Text style={{fontWeight:"bold"}}>B) BANCO</Text>: Presente esta tarjeta en cualquier sucursal Santander indicándole al cajero la cantidad tomando en cuenta la fecha de su pago. Conserve su ficha y presente en la oficina del colegio para la emisión de su factura.</Text>
        <Text style={{paddingVertical:5,fontSize:18}}><Text style={{fontWeight:"bold"}}>C) TRANSFERENCIA</Text>: Tome en cuenta la fecha de su pago y envié el comprobante para emisión de su factura al correo: <Text style={{color:"blue",textDecorationLine:"underline"}}>colegioindiragandhiprimaria@gmail.com</Text></Text>
        
        <Text style={{paddingTop:15, fontWeight:"bold", fontSize: 25, textAlign:"center"}}>NOTA IMPORTANTE</Text>
        <Text style={{paddingVertical:5,fontSize:18}}>-> Favor de realizar su pago por la cantidad que corresponde según la fecha como se indica en la tabla superior.</Text>
        <Text style={{paddingVertical:5,fontSize:18}}>-> Efectué sus pagos de manera consecutiva sin saltar meses.</Text>
        <Text style={{paddingVertical:5,fontSize:18}}>-> Solo se depositan y facturan inscripciones y colegiaturas.</Text>
        </ScrollView>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        alignItems:"center"
    }
});