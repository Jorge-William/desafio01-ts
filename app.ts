import { CollegeAccount } from './class/CollegeAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount)
peopleAccount.balance
peopleAccount.withdraw(1)
console.log(peopleAccount.balance)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(50)
console.log(companyAccount)
companyAccount.getLoan(10)
console.log(companyAccount)
console.log(companyAccount.balance);
const collegeAccount: CollegeAccount = new CollegeAccount('Jorge', 32)
collegeAccount.deposit(78)
console.log(collegeAccount.balance);