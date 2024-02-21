type TypeAccounts = {
  name:string
  avatar: string;
};

type TypeAuth = {
  email: string;
  token: string;
  accounts: TypeAccounts[];
};
