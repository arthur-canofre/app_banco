import React from "react";
import { Pressable, Text } from "react-native";

const Botao = ({texto, estilo, onPress}) =>{
    return(
        <Pressable
            style={estilo}
            onPress={onPress}
        >
            <Text>{texto}</Text>
        </Pressable>
    )
}

export default Botao