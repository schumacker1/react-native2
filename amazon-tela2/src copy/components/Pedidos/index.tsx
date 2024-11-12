import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import principia from "./../../../assets/principia.jpg"
import whey from "./../../../assets/whey.png"

export const Pedidos = () => {
    return (
        <View style={styles.pedidos}>
            <View style={styles.topo}>
                <View style={styles.butCima}>
                    <View style={styles.butMaior}>
                        <Text>Seus Pedidos</Text>
                    </View>
                    <View style={styles.butMaior}>
                        <Text>Compara Novamente</Text>
                    </View>
                </View>
                <View style={styles.butBaixo}>
                    <View style={styles.buMenor}>
                        <Text>Sua Conta</Text>
                    </View>
                    <View style={styles.buMenor}>
                        <Text>Suas Listas</Text>
                    </View>
                </View>
            </View>

            <View style={styles.meio}>
                <Text style={styles.text1}>Seus Pedidos</Text>
                <Text style={styles.text2}>Ver tudo</Text>
            </View>

            <View style={styles.baixo}>
                <View style={styles.card}>
                    <Image
                    source={principia}
                    style={styles.imagem}
                    />
                </View>
                <View style={styles.card}>
                    <Image
                    source={whey}
                    style={styles.imagem}
                    />
                </View>
            </View>

        </View>
    )
}