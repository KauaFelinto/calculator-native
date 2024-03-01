import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import Botao from './Botao';

export default function App() {

  console.disableYellowBox = true;

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");
  const [calculo, setStringCalculo] = useState("0");

  var numbers = [];

  for(i = 0; i <= 9; i++){
    numbers.push(i);
  }

  function logicaCalculadora(n){
    if(sinal == ""){
        setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
        setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
    }

    if((n == "/" || n == "*" || n == "+" || n =="-") && secondNumber == 0){
        setStringCalculo(firstNumber.toString() + n);
        setSinal(n);
    }

    if(sinal != ""){
        setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
        setStringCalculo(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()));
    }

    if(n == "="){
        let resultado = 0;
        if(sinal == "+"){
            resultado = firstNumber+secondNumber;
        }else if(sinal == "-"){
          resultado = firstNumber-secondNumber;
        }
        else if(sinal == "/"){
          resultado = firstNumber/secondNumber;
        }
        else if(sinal == "*"){
          resultado = firstNumber*secondNumber;
        }
        setStringCalculo(resultado);
        setSinal("");
        setFirstNumber(resultado);
        setSecondNumber(0);
    }
   
}


  return (
    <View style={{flex:1, backgroundColor: '#000'}}>
      <View style={styles.topo}><Text style={{fontSize: 24, color: '#fff'}}>{calculo}</Text></View>

      <View style={{flexDirection: 'row', height: '16.6%', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>logicaCalculadora('+')} style={{width:'20%', backgroundColor: 'rgb(20,20,20)', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Text style={{fontSize:24, color: '#fff'}}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('-')} style={{width:'20%', backgroundColor: 'rgb(20,20,20)', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Text style={{fontSize:24, color: '#fff', textAlign: 'center'}}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('*')} style={{width:'20%', backgroundColor: 'rgb(20,20,20)', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Text style={{fontSize:24, color: '#fff', textAlign: 'center'}}>x</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('/')} style={{width:'20%', backgroundColor: 'rgb(20,20,20)', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Text style={{fontSize:24, color: '#fff', textAlign: 'center'}}>/</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>logicaCalculadora('=')} style={{width:'20%', backgroundColor: 'rgb(20,20,20)', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Text style={{fontSize:24, color: '#fff', textAlign: 'center'}}>=</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', flexWrap:'wrap', borderTopColor: '#000', borderTopWidth: 2, height: '66.8%'}}>
        {
          numbers.map(function(e){
            return(<Botao logicaCalculadora={logicaCalculadora} numbers={e}></Botao>)
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding: 10,
    borderBottomColor: '#000',
    borderWidth: 2,
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 20
  }
});
