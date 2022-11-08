import { useState } from "react";
import { AuthMode } from "./context/AuthMode";
import { AppRouter } from "./router/AppRouter";

export default () => {

  const [authMode, setAuthMode] = useState<"ADMINISTRACION" | "VENTAS" | null>(null);

  return (
    <AuthMode.Provider value={{
      authMode,
      setAuthMode
    }}>
      <AppRouter />
    </AuthMode.Provider>
  );
}