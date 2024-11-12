import React from "react";
import { styles } from "./styles";
import { Image, Text, View } from "react-native";
import granola from "./../../../assets/granola.jpg"
import creatinaInt from "./../../../assets/creatinaInt.jpg"
import creme from "./../../../assets/creme.jpg"
import sabonete from "./../../../assets/sabonete.jpg"
import hipercalorico from "./../../../assets/hipercalorico.jpg"
import creatinaMax from "./../../../assets/creatinaMax.jpg"

export const Comprar = () => {
    return (
        <View style={styles.comprar}>
            <View style={styles.cima}> 
                <Text style={styles.text1}>Comprar Novamente</Text>
                <Text style={styles.text2}>Ver Tudo</Text>
            </View>

            <View style={styles.baixo}>
                <View style={styles.card}>
                <Image
                    source={granola}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                <Image
                    source={creatinaInt}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                <Image
                    source={creme}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                <Image
                    source={sabonete}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                <Image
                    source={hipercalorico}
                    style={styles.imagem}
                    />
                </View>

                <View style={styles.card}>
                <Image
                    source={creatinaMax}
                    style={styles.imagem}
                    />
                </View>
            </View>

        </View>
    )
}