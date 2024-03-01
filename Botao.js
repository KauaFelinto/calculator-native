import { BackHandler, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Botao(props){
    return(
        <View style={{backgroundColor: '#000', borderColor: '#fff', borderWidth:1, width: '33.3%', height: '25%'}}>
            <TouchableOpacity onPress={() =>props.logicaCalculadora(props.numbers)} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:24, color:'#fff'}}>{props.numbers}</Text>
            </TouchableOpacity>
        </View>
    );
}