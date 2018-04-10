import React, { Component } from 'react';
import { StatusBar, Image,} from "react-native";
import { TabNavigator } from "react-navigation";
import AvisosGenerales from "./AvisosGenerales";
import AvisosGrupales from './AvisosGrupales';
import AvisosPersonales from './AvisosPersonales';
import { Footer, FooterTab, Button, Text, Container } from "native-base";

export default (MainScreenNavigator = TabNavigator(
    {
        AvisosGenerales:{ screen: AvisosGenerales },
        AvisosGrupales:{ screen: AvisosGrupales },
        AvisosPersonales:{ screen: AvisosPersonales }
    },
    {
        tabBarPosition:"bottom",
        tabBarComponent: props => {
            return(
                <Footer style={{backgroundColor: "#3A79F7",}}>
                    <FooterTab style={{backgroundColor: "#3A79F7",}}>
                        <Button vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("AvisosGenerales")}>
                            <Image source={require("../../images/general.png")} style={{width:18,height:18, tintColor:"#fff"}}/>
                            <Text>Generales</Text>
                        </Button>
                        <Button vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("AvisosGrupales")}>
                            <Image source={require("../../images/grupo.png")} style={{width:18,height:18, tintColor:"#fff"}}/>
                            <Text>Para el salon</Text>
                        </Button>
                        <Button vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("AvisosPersonales")}>
                            <Image source={require("../../images/personal.png")} style={{width:18,height:18, tintColor:"#fff"}}/>
                            <Text>Para mi</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
))
