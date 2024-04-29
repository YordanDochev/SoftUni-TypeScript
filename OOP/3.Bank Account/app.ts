class BankAccount {
  private static nextId: number = 1;
  private static interestRate: number = 0.02;

  private id: number;
  private balance: number;

  constructor() {
    this.id = BankAccount.nextId++;
    this.balance = 0;
  }

  static setInterestRate(interest: number): void {
    BankAccount.interestRate = interest;
  }

  static getInterest(): number {
    return BankAccount.interestRate;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} to account ${this.id}`);
    } else {
      console.log(`Invalid amount for deposit: ${amount}`);
    }
  }

  calculateInterest(years: number): number {
    return this.balance * BankAccount.interestRate * years;
  }

  getBalance(): number {
    return this.balance;
  }

  getId(): number {
    return this.id;
  }
}

// Test client
const accounts: BankAccount[] = [];

function processCommand(command: string): void {
  const tokens: string[] = command.split(' ');

  switch (tokens[0]) {
    case 'Create':
      accounts.push(new BankAccount());
      console.log(`Account created with ID: ${accounts[accounts.length - 1].getId()}`);
      break;
    case 'Deposit':
      const id: number = parseInt(tokens[1]);
      const amount: number = parseFloat(tokens[2]);
      const account = accounts.find(acc => acc.getId() === id);
      if (account) {
        account.deposit(amount);
      } else {
        console.log(`Account with ID ${id} does not exist`);
      }
      break;
    case 'SetInterest':
      const interest: number = parseFloat(tokens[1]);
      BankAccount.setInterestRate(interest);
      console.log(`Interest rate set to ${interest}`);
      break;
    case 'GetInterest':
      const accountId: number = parseInt(tokens[1]);
      const years: number = parseInt(tokens[2]);
      const acc = accounts.find(a => a.getId() === accountId);
      if (acc) {
        const interestAmount = acc.calculateInterest(years);
        console.log(`Interest for account ${accountId} after ${years} years: ${interestAmount}`);
      } else {
        console.log(`Account with ID ${accountId} does not exist`);
      }
      break;
    case 'End':
      console.log('Program terminated.');
      break;
    default:
      console.log('Invalid command');
  }
}

processCommand("Create");
processCommand("Create");
processCommand("Deposit 1 20");
processCommand("Deposit 3 20");
processCommand("Deposit 2 10");
processCommand("SetInterest 1.5");
processCommand("GetInterest 1 1");
processCommand("GetInterest 2 1");
processCommand("GetInterest 3 1");
