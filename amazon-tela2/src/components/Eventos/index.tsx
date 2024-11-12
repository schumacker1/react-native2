import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import kindle from "./../../../assets/kindle.png"
import livros from "./../../../assets/livros.png"
import jogo from "./../../../assets/jogo.png"
import televisao from "./../../../assets/televisao.png"

export const Eventos = () => {
    return (
        <View style={styles.eventos}>
            <View style={styles.cima}>
                <Text style={styles.text}>Esquenta Black Friday</Text>
            </View>

            <View style={styles.baixo}>
                <View style={styles.card}>
                    <Image
                    source={kindle}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                    <Image
                    source={livros}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                    <Image
                    source={jogo}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                    <Image
                    source={televisao}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>

                </View>

            </View>
        </View>
    )
}