import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

export const Header = () => {
    return (
        <View style={styles.topo}>
            <TextInput
            style={styles.input}
            placeholder="Pesquise na Amazon.com.br"
            />
        </View>
    )

}
