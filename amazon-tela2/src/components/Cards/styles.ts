import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cards: {
        flexDirection:'row',
        backgroundColor: '#E0FFFF',
        height: 180,
        alignItems: 'center',
        gap: 8
    },

    card: {
        height: 175,
        width: 135,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },

    text:{
        fontWeight:'bold',
        fontSize: 13.8
    },

    imagemCard1: {
        height: 100,
        width: 120
    },
    imagemCard2:{
        height: 130,
        width: 100
    },
    imagemCard3: {
        height: 100,
        width: 130
    }
})