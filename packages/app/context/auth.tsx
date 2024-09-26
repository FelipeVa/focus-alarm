import { createContext, useContext, useState } from 'react';

type AuthContextConfig = {
  session: boolean | null;
  signIn: () => void;
  signOut: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextConfig>({
  session: null,
  signIn: () => null,
  signOut: () => null,
});

function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth must be wrapped in a <AuthProvider>');
  }

  return value;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<boolean | null>(false);
  return (
    <AuthContext.Provider
      value={{
        session,
        signIn: () => setSession(true),
        signOut: () => setSession(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
