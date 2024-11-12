import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profile: {
        padding: 15,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 16
    },
    pt: {
        fontWeight: 'bold'
    },
    imagem: {
        height: 20,
        width: 20
        // resizeMode: 'contain'
    },
    direita: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 5,
        width: '50%',
    },
    esquerda:{
        flexDirection:'row',
        gap: 0,
        width: '50%'
    }
})