import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

function Count(props) {


    var D = 69;
    
    var text = <div>Введите необходимые данные</div>
    if (!isNaN(props.a && props.b && props.c)) { 
        let a = Number(props.a);
        let b = Number(props.b);
        let c = Number(props.c);
        
        if(a == 0){
            D = 69;
        }

        D = (b * b) - 4 * a * c;

        if(D < 0){
            text = <div>
                <p>Дискриминант квадратного уравнения:</p>
                <p>
                {D}
                </p>
                <p>Так как дискриминант меньше нуля, то уравнение не имеет действительных решений.</p>
            </div>
        }
        else if(D > 0){
            var x1 = (-b - Math.sqrt(D)) / (2 * a);
            var x2 = (-b + Math.sqrt(D)) / (2 * a);

            text = <div>
                <p>Дискриминант квадратного уравнения:</p>
                <p>
                {D}
                </p>
                <p>Так как дискриминант больше нуля то, квадратное уравнение имеет два действительных корня:</p>
                <p>
                x1 = {x1}
                </p> 
                <p>x2 = {x2}</p>
                </div>
        }
        else if(D == 1){
            var x = -b / -2 * a;
            text = <div>
                <p>Так как дискриминант равен нулю, квадратное уравнение имеет один действительный корень:</p>
                <p>
                    {x}
                </p>
            </div>
        }
    }
    else {
        alert("Вводить только цифры!");
    }

    return(
    <View style={styles.box}>
        <Text style={styles.text}>Решение:</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: "99%",
        height: "300px",
        border: "1px solid",
        margin: "auto",
        backgroundColor: "#ada",
        
    },
    text: {
        textAlign: "left",
        fontSize: "20px",
    },
});

export default Count;