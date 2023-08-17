import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number) => {
    if(this.status()){
      console.log(this.balance);
      this.balance = value
      console.log(this.balance);
    console.log(`You take a loan of ${value}. Your balance is now ${this.balance}.`);
    } else {
      console.log("Your account is invalid!!!")
    }
  }
}
