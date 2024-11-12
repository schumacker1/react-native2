import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import config from "./../../../assets/config.png"
import person from "./../../../assets/person.png"
import notificacao from "./../../../assets/notificacao.png"
import brasil from "./../../../assets/brasil.png"

export const Profile = () => {
    return (
        <View style={styles.profile}>
            <View style={styles.esquerda}>
                <Image
                source={person}
                style={styles.imagem}
                />

                <Text style={styles.nome}>Olá, LUCAS</Text>

            </View>

            <View style={styles.direita}>
                <Image
                source={config}
                style={styles.imagem}
                />
                
                <Image
                source={notificacao}
                style={styles.imagem}
                />

                <Image
                source={brasil}
                style={styles.imagem}
                />

                <Text style={styles.pt}>PT</Text>
            </View>
        </View>
    )
}