import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Deashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);
  

    function handleOpenNewTransactionModel(){
        setIsNewTransactionOpen(true);
    }

    function handleCloseNewTransactionModel(){
        setIsNewTransactionOpen(false)
    }
  return (
    
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModel}/>
        <Dashboard />
        
        <NewTransactionModal 
          isOpen={isNewTransactionOpen}
          onRequestClose={handleCloseNewTransactionModel}
        />

        <GlobalStyle/>
      </TransactionsProvider>
      
    
  );
}


