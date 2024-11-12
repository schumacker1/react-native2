import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../Localizacao/styles";
import local from "./../../../assets/localizacao.png"

export const Localizacao = () => {
    return (
        <View style={styles.localizacao}>
            <Image
            source={local}
            style={styles.imagem}
            />
            <Text style={styles.text}>
                Enviar para Lucas - Nova friburgo 28610160
            </Text>
        </View>
    )
}