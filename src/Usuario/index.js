import React, { Component } from "react";
import ComponentInfo from "./ComponentInfo";
import ComponentAvisos from './Avisos/ComponentAvisos';
import ComponentTareas from './Tareas/TabMaterias';
import componentCalificaciones from "./Calificaciones/ComponentCalificaciones";
import ComponentPagos from './Pagos/ComponentPagos';
import moduleName from '../Login/Login';
import { DrawerNavigator, StackNavigator } from "react-navigation";
import SideBar from "../SideBar/SideBar";

const HomeScreenRouter = DrawerNavigator({
        Datos:{ screen: ComponentInfo },
        Avisos:{ screen:ComponentAvisos },
        Tareas:{ screen:ComponentTareas },
        Calificaciones:{ screen: componentCalificaciones},
        Pagos:{ screen:ComponentPagos },
    },{
        initialRouteName:'Datos',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute:'DrawerClose',
        drawerToggleRoute:'DrawerToggle',
        contentOptions:{
            activeBackgroundColor:"#0ec1e9",
            activeTintColor:"#fff"
        },
        drawerWidth: 250,
        contentComponent: props => <SideBar {...props}/>
    }
);
export default HomeScreenRouter;