import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction';

//bringing in the global context

export const TransactionList = () => {
  //destructure transcations
  // const context = useContext(GlobalContext)
  // destructure transcations
  const {transactions} = useContext(GlobalContext)

  // console.log(transactions)
  return <>
  <h3>History</h3>
  <ul id="list" className="list">
    {/* passing in transactions, each element needs to be unique so we use key to create a unique set of elements in a list */}
    {transactions.map(transaction => ( <Transaction  key={transaction.id} transaction={transaction} />))}

  </ul>
  
  </>;
};
