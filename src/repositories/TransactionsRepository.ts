import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionRepositoryDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  static readonly TRANSACTION_BALANCE_TYPE = {
    INCOME: 'income',
    OUTCOME: 'outcome',
  };

  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.getTotalTransactionsByType(
      TransactionsRepository.TRANSACTION_BALANCE_TYPE.INCOME,
    );

    const outcome = this.getTotalTransactionsByType(
      TransactionsRepository.TRANSACTION_BALANCE_TYPE.OUTCOME,
    );

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }

  private getTotalTransactionsByType(type: string): number {
    try {
      return this.transactions
        .filter(balance => balance.type === type)
        .map(transaction => transaction.value)
        .reduce((sum, current) => {
          return sum + current;
        });
    } catch (e) {
      return 0;
    }
  }

  public create({
    title,
    value,
    type,
  }: CreateTransactionRepositoryDTO): Transaction {
    const transaction = new Transaction({
      title,
      value,
      type,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
