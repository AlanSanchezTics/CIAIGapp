import React, { Component } from 'react';
import { StatusBar, Image,} from "react-native";
import { TabNavigator } from "react-navigation";
import { Footer, FooterTab, Button, Text, Container } from "native-base";
import Indextareas from './Indextareas';
import IndexEn from './IndexEn';

export default (ScreenMateriasNavigator = TabNavigator(
    {
        IndexEsp:{ screen:Indextareas},
        IndexEn:{ screen:IndexEn}
    },
    {
        tabBarPosition:"bottom",
        tabBarComponent: props => {
            return(
                <Footer style={{backgroundColor: "#3A79F7",}}>
                    <FooterTab style={{backgroundColor: "#3A79F7",}}>
                        <Button vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("IndexEsp")}>
                            <Image source={require("../../images/spanish.png")} style={{width:18,height:18, tintColor:"#fff"}}/>
                            <Text>Español</Text>
                        </Button>
                        <Button vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("IndexEn")}>
                            <Image source={require("../../images/english.png")} style={{width:18,height:18, tintColor:"#fff"}}/>
                            <Text>Ingles</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    }
))