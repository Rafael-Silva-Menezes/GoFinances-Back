import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists', 404);
    }

    const response = await transactionRepository.remove(transaction);

    return response;
  }
}

export default DeleteTransactionService;
