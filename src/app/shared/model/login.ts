export interface IRegister {
  email: string;
  password: string;
  userRole: 'admin' | 'buyer' | 'superAdmin';
}

export interface Ilogin {
  email: string;
  password: string;
}
