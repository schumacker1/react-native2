import React from "react";
import { ScrollView, View } from "react-native";
import { Rodape } from "../components/Rodape";
import { Header } from "../components/Header";
import { Localizacao } from "../components/Localizacao";
import { Promocao } from "../components/Promocao";
import { Cards } from "../components/Cards";
import { Eventos } from "../components/Eventos";


export const Home = () => {
    return (
        <View style={{flex:1}}>
            <Header/>
            <ScrollView>
            <Localizacao/>
            <Promocao/>
            <Cards/> 
            <Eventos/>  
            </ScrollView> 
            <Rodape/>
        </View>
    )
}