import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pedidos: {
        backgroundColor: 'white',
        height: 350,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 5,
        justifyContent:'space-around'
    },

    topo: {
        gap: 10
    },
    butCima:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    },
    butMaior:{
        backgroundColor: '#e0e0e0',
        height: 65,
        width: 180,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        fontWeight:'bold'
    },
    butBaixo:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    },
    buMenor: {
        backgroundColor: '#e0e0e0',
        height: 50,
        width: 180,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        fontWeight:'bold'
    },

    meio: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    text1:{
        fontWeight: 'bold',
        fontSize: 20
    },
    text2:{
        color: "#149899",
        fontSize: 14,
        fontWeight: 'bold'
    },

    baixo: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        paddingBottom: 10
    },
    card: {
        backgroundColor: 'white',
        height: 140,
        width: 170,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems : 'center'
    },
    imagem:{
        height: 120,
        width: 120
    }
})