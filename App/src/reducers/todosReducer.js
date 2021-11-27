import { ADDTODO, EDITTODO, DELTODO, GETTODOS } from '../actions/types'

const initialState = []

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADDTODO:
            return [...state, action.payload.todo]
        case EDITTODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = action.payload.completed
                }
                return todo
            })
        case DELTODO:
            return state.filter(todo => todo.id !== action.payload.id)
        case GETTODOS:
            return action.payload.todos
        default: return state
    }
}
