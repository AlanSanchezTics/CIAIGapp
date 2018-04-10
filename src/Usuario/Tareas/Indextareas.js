import React, { Component } from "react";
import ContentTareas from './ContentTareas';
import ListMaterias from './ListMaterias';

import { StackNavigator } from "react-navigation";
export default (drawTareas = StackNavigator({
    Materias: { screen:ListMaterias},
    Tareas: { screen: ContentTareas}
},{
    initialRouteName:'Materias',
}
));