import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    comprar: {
        // height: 150,
        // backgroundColor: 'gray',

    },

    cima: {
       flexDirection:'row',
       justifyContent: 'space-between',
       padding: 15
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20
    },
    text2: {
        color: "#149899",
        fontSize: 14,
        fontWeight: 'bold'
    },

    baixo:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        paddingLeft: 15
    },
    card:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: 110,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        height: 80,
        width: 80
    }
})