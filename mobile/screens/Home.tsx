import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import z from "zod"
import { CREATE_TODO_REQUEST } from '../types/Todo'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAddTodoMutation, useGetTodoQuery } from '../redux/todo.api'
const Home = () => {
    const { data } = useGetTodoQuery()
    const [addTodo, { isLoading: addLoading }] = useAddTodoMutation()
    const schema = z.object({
        task: z.string().min(3),
        description: z.string().min(3),
        priority: z.string().min(3),
        user_id: z.number()
    }) satisfies z.ZodType<CREATE_TODO_REQUEST>
    const { control, setValue, handleSubmit, reset } = useForm({ defaultValues: { user_id: 1 }, resolver: zodResolver(schema) })

    const handleFormSubmit = async (todoData: CREATE_TODO_REQUEST) => {
        try {
            await addTodo(todoData).unwrap()
            console.log("todo add success");

        } catch (error) {
            console.log(error);

        }
        // console.log(errors)

    }

    return <View style={{ padding: 20, marginTop: 20 }}> 
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
        <Card >
            <Card.Content style={{ gap: 20 }}>
                {/* <Controller name='task' control={control} render={({ field: { onChange, value } }) =>
                    <TextInput onChange={onChange} value={value} mode='outlined' placeholder='enter Task' />}
                /> */}
                {/*                
                <TextInput onChangeText={val => setValue("description", val)} mode='outlined' placeholder='enter desc' />
                <TextInput onChangeText={val => setValue("priority", val)} mode='outlined' placeholder='enter priority' /> */}


                {
                    ["task", "description", "priority"].map((item: any) => <Controller key={item} name='task' control={control} render={({ field: { onChange, value } }) =>
                        <TextInput onChange={onChange} value={value} mode='outlined' placeholder={`enter your ${item}`} />}
                    />)
                }
                <Button onPress={handleSubmit(handleFormSubmit)} mode="contained">Add task</Button>
            </Card.Content>
        </Card>
    </View>
}


export default Home

const styles = StyleSheet.create({})