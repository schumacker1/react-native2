import React from "react";
import { ScrollView, View } from "react-native";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Pedidos } from "../../components/Pedidos";
import { Comprar } from "../../components/Comprar";
import { Rodape } from "../../components/Rodape";




export const Home = () => {
    return (
        <View style={{flex:1}}>
           <Header/>
           <ScrollView>
           <Profile/>
           <Pedidos/>
           <Comprar/>
           </ScrollView>
           <Rodape/>
           {/* //Fazer rodape aqui */}
        </View>
    )
}