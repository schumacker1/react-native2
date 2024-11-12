import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "../Promocao/styles";
import prop from "./../../../assets/propaganda.jpg"

export const Promocao = () => {
    return (
        <View style={styles.promocao}>
            <View style={styles.propaganda}>
                <Image
                    source={prop}
                    style={styles.imagem}
                />
            </View>
        </View>
    )
}