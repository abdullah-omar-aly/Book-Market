"use client"
import React from 'react'
import store from '@/presentation/store/root.store'
import { Provider } from "react-redux";

function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>

            {children}
        </Provider>

    )
}

export default ContextProvider