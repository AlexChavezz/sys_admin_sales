import { createContext } from "react";

type AuthState = "ADMINISTRACION" | "VENTAS" | null;

interface AuthMode {
    authMode: AuthState,
    setAuthMode: React.Dispatch<React.SetStateAction<AuthState>>
}

export const AuthMode = createContext({} as AuthMode)