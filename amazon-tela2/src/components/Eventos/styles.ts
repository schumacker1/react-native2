import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    eventos: {
        backgroundColor: 'white',
        height: 190,
        paddingLeft: 10

    },

    cima: {
        paddingTop: 5
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20
    },

    baixo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingTop: 25
    },
    card: {
        backgroundColor: '#FF4500',
        height: 95,
        width: 95,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        height: 75,
        width: 75,
    }
})