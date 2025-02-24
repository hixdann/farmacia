import { createContext, ReactNode, useState } from "react"

interface AuthContextProps {
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)