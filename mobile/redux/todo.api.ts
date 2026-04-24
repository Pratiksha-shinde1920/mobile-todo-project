import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CREATE_TODO_REQUEST, CREATE_TODO_RESPONSE, DELETE_TODO_REQUEST, DELETE_TODO_RESPONSE, GET_TODO_REQUEST, GET_TODO_RESPONSE, UPDATE_TODO_REQUEST, UPDATE_TODO_RESPONSE } from "../types/Todo"
import { env } from "../config/env"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${env.APP_URL}/api/todo` }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodo: builder.query<GET_TODO_RESPONSE, GET_TODO_REQUEST>({
                query: () => {
                    return {
                        url: "/read",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addTodo: builder.mutation<CREATE_TODO_RESPONSE, CREATE_TODO_REQUEST>({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateTodo: builder.mutation<UPDATE_TODO_RESPONSE, UPDATE_TODO_REQUEST>({
                query: userData => {
                    return {
                        url: "/update/" + userData._id,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodo: builder.mutation<DELETE_TODO_RESPONSE, DELETE_TODO_REQUEST>({
                query: userData => {
                    return {
                        url: "/delete/" + userData.id,
                        method: "DELETE",
                        body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),

        }
    }
})

export const { useGetTodoQuery,useLazyGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoApi
