export interface IStudent {
  name: string;
  email: string;
  gender: boolean;
  passwords?: {
    password: string;
    confirmPassword: string;
  };
  phone: number;
}
