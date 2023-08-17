export abstract class DioAccount {
  private readonly accountNumber: number;
  private readonly _name: string = "Pessoa";
  private _balance: number = 0;
  private _status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.accountNumber = accountNumber
  }

  get name (): string  {
    return this.name
  }

  public get status() {
    return this.validateStatus
  }

  public get balance(){
    return this._balance;
  }

  set balance(value: number) {
    this._balance += value;
  }

  deposit = (value: number): void => {
    if(this._status){
      this._balance += value
      console.log(`Voce depositou ${value}`)
    } else {
      console.log("Your account is not valid.");
      
    }
  }

  withdraw = (value: number): void => {
      if(value > this.balance || !this.status) {
        return console.log('you dont have money to do this or your account is not valided! ');
      } else {
        this._balance -= value;
      }
    
    console.log(`was withdrawn ${value} `)
  }

  // getBalance = (): void => {
  //   console.log(this._balance)
  // }

  private validateStatus = (): boolean => {
    if (this._status) {
      return this._status
    }

    throw new Error('Conta inválida')
  }
};
