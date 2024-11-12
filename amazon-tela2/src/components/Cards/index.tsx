import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../Cards/styles";
import black from "./../../../assets/blackFriday.jpg"
import celular from "./../../../assets/celular.jpg"
import elastico from "./../../../assets/elastico.jpg"


export const Cards = () => {
    return (
        <View style={styles.cards}>
            <View style={styles.card}>
                <Text style={styles.text}>
                    Ofertas do Esquenta Black Friday
                </Text>
                <Image
                    source={black}
                    style={styles.imagemCard1}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>
                    Top ofertas em Cases e capas
                </Text>
                <Image
                    source={celular}
                    style={styles.imagemCard2}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>
                    Ofertas para você em Elásticos
                </Text>
                <Image
                    source={elastico}
                    style={styles.imagemCard3}
                />
            </View>

        </View>
    )
}
