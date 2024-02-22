import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface AuthContextData {
  perfil: TypeAccount;
  setPerfil: React.Dispatch<React.SetStateAction<TypeAccount>>;
  user: TypeAuth;
  setUser: React.Dispatch<React.SetStateAction<TypeAuth>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: Readonly<AuthProviderProps>): JSX.Element {
  const [perfil, setPerfil] = useState<TypeAccount>({
    avatar:
      "https://static.wikia.nocookie.net/tudosobrehoradeaventura/images/4/40/Tumblr_e5ebc6f291106a9ff68a6dd46d71e3df_c58670ae_1280.jpg/revision/latest/scale-to-width-down/1000?cb=20210617224350&path-prefix=pt-br",
    name: "Jujuba",
    token: "123412313123213132",
  });

  const [user, setUser] = useState<TypeAuth>({
    email: "matheus.fellipi@outlook.com",
    token: "123412313123213132",
    accounts: [
      {
        avatar:
          "https://static.wikia.nocookie.net/tudosobrehoradeaventura/images/4/40/Tumblr_e5ebc6f291106a9ff68a6dd46d71e3df_c58670ae_1280.jpg/revision/latest/scale-to-width-down/1000?cb=20210617224350&path-prefix=pt-br",
        name: "Jujuba",
        token: "123412313123213132",
      },
      {
        avatar:
          "https://pm1.aminoapps.com/6342/39df5b7a9f895b8c70b5ef5fcc5d32f389259d89_hq.jpg",
        name: "Marceline ",
        token: "123412313123213132",
      },
    ],
  });

  const contextValue = useMemo(() => {
    return { user, setUser, perfil, setPerfil };
  }, [user, perfil]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
