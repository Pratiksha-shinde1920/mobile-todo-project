export type TODO = {
    id?: number
    task: string
    description: string
    priority: string
    user_id: number
}

export type GET_TODO_REQUEST = void
export type GET_TODO_RESPONSE = {
    message: string
    result?: TODO[]
}
export type CREATE_TODO_REQUEST = TODO
export type CREATE_TODO_RESPONSE = {
    message: string

}

export type UPDATE_TODO_REQUEST = TODO
export type UPDATE_TODO_RESPONSE = { message: string }
export type DELETE_TODO_REQUEST = { id: number }
export type DELETE_TODO_RESPONSE = {
    message: string

}