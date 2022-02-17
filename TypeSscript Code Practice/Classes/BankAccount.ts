// example-1
interface IAccount {
  name: string;
  balance: string;
}

class BankAccount implements IAccount {
  constructor(public name, public balance) {}
}
