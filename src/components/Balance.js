import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  //get the amounts and place into an array
  const amounts = transactions.map(transaction => transaction.amount);
  //sum up the amounts a return a value with 2 decimal places using toFixed
  const total = amounts.reduce((acc,item) => (acc +=item), 0).toFixed(2)


  return <div>
      <h4> Your Balance</h4>
      <h1 id="balance">{total}</h1>
  </div>;
};
