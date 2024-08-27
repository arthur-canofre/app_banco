import React, {useState} from "react";
import {View, Text, Image, Button, StyleSheet, Modal, TextInput } from "react-native";
import Botao from "../components/Botao";

const App = () => {

    const [saldo, setSaldo] = useState(7320.92)
    const [valorInput, setValorInput] = useState(null)
    const [ope, setOpe] = useState(null)
    const [visivel, setVisivel] = useState(false)

    const executar = (operacao) =>{
        switch (operacao){
            case "saque": 
                setSaldo(saldo - (parseFloat(valorInput) + ((saldo - parseFloat(valorInput)) * 0.025)));
                break
            case "deposito":
                setSaldo(saldo + (parseFloat(valorInput) + (parseFloat(valorInput) * 0.01)))
                break
        }
        setOpe(null)
        setVisivel(false)
    }

    return(
        <View style={styles.container}>
            <Modal
                animationType="fade"
                visible = {visivel}
            >
                <View style = {styles.containerModal}>
                    <Text> Você deseja realizar o saque no valor de {valorInput}? </Text>
                    <View  style = {styles.containerButtons}>
                        <Botao
                            texto="SIM"
                            onPress={() => executar(ope)}
                            estilo={styles.btS}
                        />
                        <Botao
                            texto="NÂO"
                            onPress={() => [setVisivel(false), setOpe(null)]}
                            estilo={styles.btN}
                        />
                    </View>
                </View>
            </Modal>
            <Image
            style = {styles.logo}
            source={{
                uri: 'https://logospng.org/download/santander/logo-santander-2048.png',
              }}
            />
            <Text style={styles.texto1}>
                Saldo atual na conta:
            </Text>
            <Text style={styles.saldo}>
                {saldo.toFixed(2)}
            </Text>
            <Text style={styles.texto2}>
                Digite o valor abaixo e escolha uma das operações bancárias.
            </Text>
            <TextInput 
            style={styles.input}
            onChangeText={setValorInput}
            placeholder="0,00"
            keyboardType="numeric"
            />
            <Button
            title="sacar"
            onPress={() => [setVisivel(true), setOpe("saque")]}
            />
            <Button
            title="depositar"
            onPress={() => [setVisivel(true), setOpe("deposito")]}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        height: '100%',
    },
    texto1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    saldo: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    texto2: {
        fontSize: 20,
        textAlign: 'center'
    },
    logo: {
        width: 400,
        height: 100
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        width: 200,
        height: 40,
        padding: 5
    },
    containerModal: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    btS: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    btN: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'red'
    }
})

export default App;