import {counterReducer} from "./Counter-Reducer";
import { createStore } from 'redux'

export type ReducersType = ReturnType<typeof counterReducer>

export const store = createStore(counterReducer)