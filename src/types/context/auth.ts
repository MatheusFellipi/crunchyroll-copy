type TypeAccount = {
  name:string
  avatar: string;
  token: string;
};

type TypeAuth = {
  email: string;
  token: string;
  accounts: TypeAccount[];
};
