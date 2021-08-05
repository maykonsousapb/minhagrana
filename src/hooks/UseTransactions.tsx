import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../api/api';

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface ProviderProps {
  children: ReactNode;
}

type DataTransactionProps = Omit<TransactionProps, 'id' | 'createdAt'>;

interface ValueContexProps {
  transactions: TransactionProps[];
  createTransaction: (Transaction: DataTransactionProps) => void;
}
const GlobalContext = createContext<ValueContexProps>({} as ValueContexProps);

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (dataTransaction: DataTransactionProps) => {
    const response = await api.post('/transactions', dataTransaction);
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  };
  return (
    <GlobalContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(GlobalContext);
  return context;
};
