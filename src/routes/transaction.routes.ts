import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionsRepository = new TransactionsRepository();
const createTransactionService = new CreateTransactionService(
  transactionsRepository,
);

const transactionRouter = Router();

transactionRouter.get('/', (_, response) => {
  try {
    const balance = transactionsRepository.getBalance();
    const transactions = transactionsRepository.all();

    return response.status(200).json({
      transactions,
      balance,
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, type, value } = request.body;

    const createTransaction = createTransactionService.execute({
      title,
      type,
      value,
    });

    return response.status(201).json(createTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
