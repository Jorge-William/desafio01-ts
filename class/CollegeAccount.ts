import { DioAccount } from "./DioAccount";

export class CollegeAccount extends DioAccount {

    deposit = (value: number): void => {
        if(this.status()){
          this.balance += (value + 10)
          console.log(`Voce depositou ${value}`)
        } else {
          console.log("Your account is not valid.");
        }
      }
}