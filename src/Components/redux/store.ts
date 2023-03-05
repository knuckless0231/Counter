import {CombinerTypesForCounterReducer, counterReducer} from "./Counter-Reducer";
import {legacy_createStore,applyMiddleware} from 'redux'
import { combineReducers } from "redux"
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    counter:counterReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionType = CombinerTypesForCounterReducer
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
