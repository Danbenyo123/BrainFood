// TODO: replace with real auth when backend supports users
import { createContext, useCallback, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(true); // start "logged in" for dev convenience

  const login  = useCallback(() => setLoggedIn(true),  []);
  const logout = useCallback(() => setLoggedIn(false), []);

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
