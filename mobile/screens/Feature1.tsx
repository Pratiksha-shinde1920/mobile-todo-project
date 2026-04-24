import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AppNavigation } from '../types/Navigation'

const Feature1 = () => {
    const { navigate } = useNavigation<AppNavigation>()
    return <>
        <View style={{ alignItems: "flex-end", justifyContent: "space-between", height: "100%", padding: 50 }}>
            <View style={{ alignItems: "center", gap: 20 }}>

                <Avatar.Image size={200} source={{ uri: "https://plus.unsplash.com/premium_photo-1667121481745-d4214ee3dc04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnwzcm1IU1p6bm5zY3x8ZW58MHx8fHx8" }} />
                <Text style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in magnam, quod inventore voluptatum iusto!</Text>
            </View>
            <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>

            <Button onPress={() => navigate("landing")} mode='contained'>Skip</Button>
            <Button onPress={() => navigate("fe2")} mode='contained'>Next</Button>
            </View>
        </View>
    </>
}

export default Feature1

const styles = StyleSheet.create({})