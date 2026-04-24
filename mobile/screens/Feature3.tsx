import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AppNavigation } from '../types/Navigation'

const Feature3 = () => {
    const { navigate } = useNavigation<AppNavigation>()
    return <>
        <View style={{ alignItems: "flex-end", justifyContent: "space-between", height: "100%", padding: 50 }}>
            <View style={{ alignItems: "center", gap: 20 }}>

                <Avatar.Image size={200} source={{ uri: "https://plus.unsplash.com/premium_photo-1681582960531-7b5de57fb276?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                <Text style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in magnam, quod inventore voluptatum iusto!</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>

                <Button style={{ width: "100%" }} onPress={() => navigate("login")} mode='contained'>Get started</Button>
            </View>
        </View>
    </>
}

export default Feature3

const styles = StyleSheet.create({})