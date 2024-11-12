import React from "react";
import { styles } from "./styles";
import { Image, Text, View,  } from "react-native";
import home from "./../../../assets/home.png"
import perfil from "./../../../assets/perfil.png"
import carrinho from "./../../../assets/carrinho.png"
import menu from "./../../../assets/menu.png"

export const Rodape = () => {
    return(
    <View style={styles.rodape}>
        <View style={styles.botao}>
            <Image
            source={home}
            style={styles.imagem}
            />
            <Text>Início</Text>
        </View>

        <View style={styles.botao}>
            <Image
            source={perfil}
            style={styles.imagem}
            />
            <Text>Conta</Text>
        </View>

        <View style={styles.botao}>
            <Image
            source={carrinho}
            style={styles.imagem}
            />
            <Text>Carrinho</Text>
        </View>

        <View style={styles.botao}>
            <Image
            source={menu}
            style={styles.imagem}
            />
            <Text>Menu</Text>
        </View>
        
    </View>
    )
}