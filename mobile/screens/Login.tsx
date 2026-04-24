import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AppNavigation } from '../types/Navigation'

const Login = () => {
    const {navigate} = useNavigation<AppNavigation>()
    return <>
        <View style={{ height: "100%", justifyContent: "center", padding: 10 }}>
            <Card>
                <Card.Content style={{ gap: 20 }}>
                    <TextInput mode='outlined' placeholder='email@gmail.com' />
                    <TextInput secureTextEntry mode='outlined' placeholder='****' />
                    <Button onPress={() => navigate("landing")} mode='contained-tonal'>Login</Button>
                </Card.Content>
            </Card>
        </View>
    </>
}

export default Login

const styles = StyleSheet.create({})