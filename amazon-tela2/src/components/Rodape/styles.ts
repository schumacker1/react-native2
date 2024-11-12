import { StyleSheet } from "react-native";
import { Rodape } from ".";

export const styles = StyleSheet.create({
    rodape:{
        borderColor: 'gray',
        borderWidth: 1,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        height: 20,
        width: 20
    }
})