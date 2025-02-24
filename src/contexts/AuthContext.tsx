import { createContext, ReactNode, useState } from "react"

interface AuthContextProps {
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

