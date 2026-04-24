import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Card, IconButton, TextInput } from 'react-native-paper'
import z from "zod"
import { CREATE_TODO_REQUEST } from '../types/Todo'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAddTodoMutation, useGetTodoQuery, useLazyGetTodoQuery } from '../redux/todo.api'
import { env } from '../config/env'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
// import { RefreshControl } from 'react-native/types_generated/index'
const Home = () => {
    // const { data } = useGetTodoQuery()
    const [addTodo, { isLoading: addLoading }] = useAddTodoMutation()
    const [readTodo, { data, isLoading }] = useLazyGetTodoQuery()
    const schema = z.object({
        task: z.string().min(3),
        description: z.string().min(3),
        priority: z.string().min(3),
        user_id: z.number()
    }) satisfies z.ZodType<CREATE_TODO_REQUEST>
    const { control, setValue, handleSubmit, reset } = useForm({ defaultValues: { user_id: 1 }, resolver: zodResolver(schema) })

    const handleFormSubmit = async (todoData: CREATE_TODO_REQUEST) => {
        try {
            console.log("submit");

            await addTodo(todoData).unwrap()
            console.log("todo add success");

        } catch (error) {
            console.log(error);

        }
        // console.log(errors)

    }
    useEffect(() => {
        readTodo()
    }, [])
    console.log(data);


    return <View style={{ padding: 20, marginTop: 20, flex: 1 }}>
        {/* 1st way to create form */}
        {/* <Card >
            <Card.Content>
                <TextInput onChangeText={val => setValue("task", val)} mode='outlined' placeholder='enter Task' />
                <TextInput onChangeText={val => setValue("description", val)} mode='outlined' placeholder='enter desc' />
                <TextInput onChangeText={val => setValue("priority", val)} mode='outlined' placeholder='enter priority' />
                <Button onPress={handleSubmit(handleFormSubmit)} mode="contained">Add task</Button>
            </Card.Content>
        </Card> */}

        {/* 2nd way to create for always go with this option */}
        <Card style={{ backgroundColor: "pink" }} >
            <Card.Content style={{ gap: 20 }}>
                <Text>{env.APP_URL}</Text>
                {/* <Controller name='task' control={control} render={({ field: { onChange, value } }) =>
                    <TextInput onChange={onChange} value={value} mode='outlined' placeholder='enter Task' />}
                /> */}
                {/*                
                <TextInput onChangeText={val => setValue("description", val)} mode='outlined' placeholder='enter desc' />
                <TextInput onChangeText={val => setValue("priority", val)} mode='outlined' placeholder='enter priority' /> */}


                {
                    ["task", "description", "priority"].map((item: any) => <Controller key={item} name={item} control={control} render={({ field: { onChange, value } }) =>
                        <TextInput onChangeText={onChange} value={value} mode='outlined' placeholder={`enter your ${item}`} />}
                    />)
                }
                <Button onPress={handleSubmit(handleFormSubmit)} mode="contained">Add task</Button>
            </Card.Content>
        </Card>
        <FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={readTodo} />}
            data={data?.result} renderItem={({ item }) =>
                <Card style={{ marginVertical: 10, backgroundColor: item.complete ? "green" : "" }}>
                    <Card.Content style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>

                            <Text>{item.task as string}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <IconButton mode="contained-tonal" icon="check" />
                            <IconButton mode="contained-tonal" icon="pencil" />
                            <IconButton mode="contained-tonal" icon="trash-can" />
                        </View>
                    </Card.Content>
                </Card>}
            keyExtractor={item => item._id as unknown as string} />
    </View>
}


export default Home

const styles = StyleSheet.create({})