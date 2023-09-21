"use client"

import React, { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

function ContextProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js").then((registration) => {
                console.log("Service Worker registered with scope:", registration.scope);
            }).catch((error) => {
                console.error("Service Worker registration failed:", error);
            });
        }
    }, [])

    return (
        <SessionProvider>
            {children}
        </SessionProvider>


    )
}

export default ContextProvider