import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AppNavigation } from '../types/Navigation'

const Feature2 = () => {
    const { navigate } = useNavigation<AppNavigation>()
    
    return <>
        <View style={{ alignItems: "flex-end", justifyContent: "space-between", height: "100%", padding: 50 }}>
            <View style={{ alignItems: "center", gap: 20 }}>

                <Avatar.Image size={200} source={{ uri: "https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                <Text style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in magnam, quod inventore voluptatum iusto!</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>

                <Button onPress={() => navigate("fe1")} mode='outlined'>Prev</Button>
                <Button onPress={() => navigate("fe3")} mode='contained'>Next</Button>
            </View>
        </View>
    </>
}

export default Feature2

const styles = StyleSheet.create({})