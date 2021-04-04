import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Count from "./Count";

const Inputs = () => {

    let inputOne = React.createRef();
    let inputTwo = React.createRef();
    let inputThree = React.createRef();

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");

    function checkInput(){
        if(inputOne.current.value == "" || inputTwo.current.value == "" || inputThree.current.value == "") {
            alert("Заполните все поля");

        }else{
            setA(inputOne.current.value);
            setB(inputTwo.current.value);
            setC(inputThree.current.value);
        }
    }

    return (
        <View >
            <View style={styles.container}>
                <input type="text" name="input" ref={inputOne}/>
                <h3>x</h3>
                <sup>2</sup>
                <h3>+</h3>
                <input type="text" ref={inputTwo} />
                <h3> x + </h3>
                <input type="text" ref={inputThree}/>
                <h3> = 0</h3> 
            </View>
            
            <View style={styles.outPut}>
                <button onClick={checkInput}>Расчитать</button>
                <Count a={a} b={b} c={c}/>
            </View>
        </View>

    );
}



const styles = StyleSheet.create ({
    container: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "row",
    },  
    outPut: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Inputs;